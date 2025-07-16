"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 py-16 text-center">
      {/* 🎯 Hero Heading */}
      <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
        ✨ AI Resume Builder – Smart, Fast, Professional
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl">
        Build your dream resume with smart suggestions, AI-generated content, and 1-click PDF export.
      </p>

      {/* 🚀 CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href="/resume/create" className="btn btn-success text-lg text-white">
          Get Started – It's Free 🚀
        </Link>
        <a
          href="https://youtube.com/shorts/YGNoFNfhDew?si=-0CHBP0cor7f2Jxv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent btn-outline text-lg"
        >
          🎬 Watch Demo
        </a>
      </div>

      {/* 🖼️ Resume Preview */}
      <div className="mt-16 max-w-4xl mx-auto">
        <Image
          src="/resume-preview.jpeg"
          alt="Resume Preview"
          width={1000}
          height={600}
          className="rounded-xl shadow-lg border border-base-300"
        />
      </div>
	    {/* 📊 Stats Section */}
		<div className="mt-20 max-w-4xl mx-auto text-center">
        {/* <h2 className="text-2xl font-bold mb-6">📊 Resume Builder Stats</h2> */}
        <div className="stats stats-vertical sm:stats-horizontal shadow border border-base-300 rounded-xl bg-base-100">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">1.2K+</div>
            <div className="stat-desc">Since Launch</div>
          </div>
          <div className="stat">
            <div className="stat-title">Resumes Created</div>
            <div className="stat-value text-secondary">5.8K+</div>
            <div className="stat-desc">Job-ready resumes</div>
          </div>
          <div className="stat">
            <div className="stat-title">Avg. Build Time</div>
            <div className="stat-value text-accent">2 min</div>
            <div className="stat-desc">From start to download</div>
          </div>
          <div className="stat">
            <div className="stat-title">PDFs Downloaded</div>
            <div className="stat-value text-success">3.9K</div>
            <div className="stat-desc">1-Click Downloads</div>
          </div>
        </div>
      </div>

      {/* 🌟 Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {features.map((f, i) => (
          <div key={i} className="bg-base-100 p-6 rounded-xl shadow-md border border-base-300">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-base text-base-content/80">{f.desc}</p>
          </div>
        ))}
      </div>

    

      {/* 💬 User Testimonials */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">💬 What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-xl bg-base-100 shadow">
              <p className="text-base-content/80 mb-4 italic">"{t.feedback}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-base-content/60">{t.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ❓ FAQ Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">❓ Frequently Asked Questions</h2>
        <div className="join join-vertical w-full">
          {faq.map((item, i) => (
            <div key={i} className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">{item.q}</div>
              <div className="collapse-content">
                <p className="text-base-content/80">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 🌟 Features
const features = [
  { title: "✏️ Edit Resume", desc: "Customize your personal info, education, experience, and skills easily." },
  { title: "🤖 AI Generated Summary", desc: "Auto-generate a strong summary using AI based on your data." },
  { title: "📄 Download as PDF", desc: "Download your resume instantly as PDF." },
  { title: "🎨 Dark/Light Theme", desc: "Toggle light/dark mode for your comfort." },
  { title: "⚡ Fast & Simple", desc: "Minimal UI, responsive design, and blazing speed." },
  { title: "🔒 Privacy Focused", desc: "Your data is secure. Nothing is shared." },
];

// 💬 Testimonials
const testimonials = [
  { name: "Ankit Rawat", role: "B.Tech Final Year", feedback: "I built my resume in 5 minutes using AI. Loved the simplicity!" },
  { name: "Priya Verma", role: "Frontend Intern", feedback: "The AI summary was exactly what I needed. Saved hours of work!" },
  { name: "Rohit Sharma", role: "Job Seeker", feedback: "Easy to use and looks professional. Recruiters appreciated it!" },
];

// ❓ FAQs
const faq = [
  {
    q: "Is this resume builder free to use?",
    a: "Yes, it's 100% free. You can edit, preview, and download your resume without any cost.",
  },
  {
    q: "Can I download my resume as a PDF?",
    a: "Yes, with one click, your resume is downloaded in clean PDF format.",
  },
  {
    q: "How does the AI summary work?",
    a: "It analyzes your resume data and creates a professional summary using AI (Gemini).",
  },
  {
    q: "Is my data saved or shared?",
    a: "No. Your data is private and stays with your account. Nothing is ever shared or sold.",
  },
];
