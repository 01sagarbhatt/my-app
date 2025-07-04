import SessionWrapper from './_components/SessionWrapper';
import Footer from './_components/Footer';
  import Navbar from './_components/Navbar';
  import './globals.css';

  export const metadata = {
    title: 'Sehar-Sehpathi',
    description: 'Welcome to my application',
  };
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
          <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
        <body className="h-100vh flex flex-col">

           <SessionWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SessionWrapper>
        </body>
      </html>
    );
  }