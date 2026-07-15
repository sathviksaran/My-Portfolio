import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold">
          Sathvik Saran Atchukolu
        </h2>

        <p className="mt-4 max-w-xl text-slate-400">
          Associate IT Consultant specializing in SharePoint,
          Power Automate, Python, Azure, AWS and modern web development.
        </p>

        <div className="mt-8 flex gap-6 text-2xl">

          <a
            href="https://github.com/sathviksaran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sathvik-saran-atchukolu-403733227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:atchukolus@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Sathvik Saran Atchukolu. Built with
          Next.js, React, Tailwind CSS and TypeScript.
        </p>

      </div>
    </footer>
  );
}