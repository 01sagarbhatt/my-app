// /lib/models/Job.js
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  job_title: String,
  employer_name: String,
  job_description: String,
  job_city: String,
  job_employment_type: String,
  job_min_salary: Number,
  job_max_salary: Number,
  job_is_remote: Boolean,
  job_apply_link: String,
  skills_required: [String]
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
