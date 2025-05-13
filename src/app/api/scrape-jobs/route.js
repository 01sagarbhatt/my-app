// src/app/api/scrape-jobs/route.js
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  let browser;
  try {
    // 1. Launch browser with stealth settings
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]
    });

    const page = await browser.newPage();
    
    // 2. Bypass bot detection
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9'
    });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    // 3. Block unnecessary resources
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // 4. Navigate with longer timeout
    await page.goto('https://www.naukri.com/jobs-in-dehradun', {
      waitUntil: 'networkidle2',
      timeout: 60000 // 60 seconds
    });

    // 5. Wait for either selector (modern or old Naukri layout)
    await Promise.race([
      page.waitForSelector('.jobTuple', { timeout: 15000 }),
      page.waitForSelector('.list', { timeout: 15000 }),
      page.waitForSelector('[data-job-id]', { timeout: 15000 })
    ]);

    // 6. Extract data with multiple selector options
    const jobs = await page.evaluate(() => {
      const jobElements = document.querySelectorAll('.jobTuple, .list, [data-job-id]');
      return Array.from(jobElements).map(job => ({
        title: job.querySelector('.title, .job-title')?.textContent?.trim() || 'N/A',
        company: job.querySelector('.subTitle, .company-name')?.textContent?.trim() || 'N/A',
        url: job.querySelector('a[href]')?.href || '#'
      }));
    });

    return NextResponse.json(jobs);

  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'Job scraping failed', details: error.message },
      { status: 500 }
    );
  } finally {
    if (browser) await browser.close();
  }
}