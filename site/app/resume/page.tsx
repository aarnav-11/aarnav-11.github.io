import type { Metadata } from 'next';
import { ArrowUpRight, Download } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { siteOrigin, sitePath } from '@/lib/site';

export const dynamic = 'force-static';

const description =
  'Education, AI research, software engineering experience, and the July resume of Aarnav Choudhary.';

export const metadata: Metadata = {
  title: 'Resume | Aarnav Choudhary',
  description,
  openGraph: {
    title: 'Resume | Aarnav Choudhary',
    description,
    url: new URL(sitePath('/resume'), siteOrigin).href,
    images: [
      {
        url: new URL(sitePath('/images/headshot.jpg'), siteOrigin).href,
        alt: 'Aarnav Choudhary',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Resume | Aarnav Choudhary',
    description,
    images: [new URL(sitePath('/images/headshot.jpg'), siteOrigin).href],
  },
};

const experience = [
  {
    company: 'BigML Lab @ UCLA',
    role: 'Undergraduate Researcher',
    date: 'Aug 2026–Present',
    detail:
      'Researching efficient GRPO and DPO algorithms for language-model post-training in Professor Baharan Mirzasoleiman’s lab.',
  },
  {
    company: 'EXL',
    role: 'Data Management Intern · EXLData.ai',
    date: 'Summer 2026',
    detail:
      'Built AI agents and RAG-Fusion knowledge pipelines with LangChain and LangGraph. Worked on production infrastructure across Databricks, Kubernetes, Helm, and Kafka.',
  },
  {
    company: 'Amazon Web Services',
    role: 'AI Software Engineering Intern · Contractual',
    date: 'Spring 2026',
    detail:
      'Collaborated on a production RAG agent for the UCLA community using AWS AgentCore. Implemented hybrid search and reduced latency from 38 seconds to 5.5 seconds.',
  },
  {
    company: 'Diro',
    role: 'Software Engineering Intern · AI',
    date: 'Summer 2025',
    detail:
      'Helped build an AI usage tracking platform with LiteLLM, Langfuse, PostgreSQL, and GCP, providing observability and reducing costs by 28%.',
  },
];

export default function Resume() {
  const resumePdf = sitePath('/documents/aarnav-choudhary-resume.pdf');

  return (
    <main id="main-content" className="resume-page">
      <div className="resume-heading">
        <div>
          <p className="eyebrow">Background & experience</p>
          <h1>
            Resume<span className="accent">.</span>
          </h1>
        </div>
        <a
          className={buttonVariants({ className: 'primary-link', size: 'lg' })}
          href={resumePdf}
          download="Aarnav-Choudhary-Resume.pdf"
        >
          Download resume <Download aria-hidden="true" />
        </a>
      </div>
      <p className="resume-intro">
        Computer Science and Mathematics at UCLA. Research in machine learning,
        with experience building and shipping AI systems.
      </p>
      <div className="resume-columns">
        <aside aria-label="Education and technical skills">
          <section className="resume-section">
            <h2>Education</h2>
            <h3>
              University of California,
              <br />
              Los Angeles
            </h3>
            <p>
              B.S. Computer Science and Mathematics
              <br />
              Expected May 2028
            </p>
            <p>
              GPA: 3.93 / 4.00
              <br />
              Dean’s honor list, 4 quarters
              <br />
              William F. Sharpe Fellow
            </p>
          </section>
          <section className="resume-section">
            <h2>Technical skills</h2>
            <dl className="skills-list">
              <dt>Languages</dt>
              <dd>Python, C++, JavaScript, SQL, HTML/CSS</dd>
              <dt>Machine learning</dt>
              <dd>
                PyTorch, TensorFlow, scikit-learn, XGBoost, NumPy, pandas,
                LangChain, LangGraph
              </dd>
              <dt>Web & infrastructure</dt>
              <dd>
                React, Node.js, FastAPI, PostgreSQL, Docker, Kubernetes, Helm,
                Kafka
              </dd>
              <dt>Cloud & tools</dt>
              <dd>AWS, GCP, Databricks, Git, Linux, Conda, Postman</dd>
            </dl>
          </section>
        </aside>
        <section className="resume-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          {experience.map((job) => (
            <article className="experience" key={job.company}>
              <p className="experience-date">{job.date}</p>
              <h3>{job.company}</h3>
              <p className="experience-role">{job.role}</p>
              <p>{job.detail}</p>
            </article>
          ))}
          <a className="text-link" href={sitePath('/#research')}>
            Explore my research <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>
      </div>
      <section className="resume-document" aria-labelledby="pdf-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">July resume</p>
            <h2 id="pdf-title">The full picture</h2>
          </div>
          <a
            className="text-link"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="paper-description">
          The complete resume includes research, projects, and detailed
          accomplishments.
        </p>
        <object
          className="resume-pdf"
          data={`${resumePdf}#view=FitH`}
          type="application/pdf"
          aria-label="Aarnav Choudhary’s July resume"
        >
          <p>
            <a className="text-link" href={resumePdf}>
              Open the July resume PDF
            </a>{' '}
            to read the full document.
          </p>
        </object>
      </section>
    </main>
  );
}
