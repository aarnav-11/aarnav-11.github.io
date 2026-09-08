import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { siteOrigin, sitePath } from '@/lib/site';

const description =
  'Work experience in machine learning research, AI engineering, data infrastructure, and production systems.';

export const metadata: Metadata = {
  title: 'Experience | Aarnav Choudhary',
  description,
  openGraph: {
    title: 'Experience | Aarnav Choudhary',
    description,
    url: new URL(sitePath('/experience'), siteOrigin).href,
    images: [
      {
        url: new URL(sitePath('/images/headshot.jpg'), siteOrigin).href,
        alt: 'Aarnav Choudhary',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Experience | Aarnav Choudhary',
    description,
    images: [new URL(sitePath('/images/headshot.jpg'), siteOrigin).href],
  },
};

const roles = [
  {
    company: 'BigML Lab @ UCLA',
    role: 'Undergraduate Researcher',
    location: 'Los Angeles, CA',
    date: 'Aug 2026–Present',
    detail:
      'Researching efficient GRPO and DPO algorithms for post-training language models in Professor Baharan Mirzasoleiman’s lab.',
  },
  {
    company: 'EXL',
    role: 'Data Management Intern · EXLData.ai',
    location: 'New York, NY',
    date: 'Summer 2026',
    detail:
      'Built AI agents to analyze and chunk internal repositories, then developed a RAG-Fusion and knowledge-base auto-update pipeline with LangChain and LangGraph. The tools supported 40 employees and 100 clients, saving about 20% of their time. Resolved production failures across Databricks, Kubernetes, Helm, and Kafka, and added secret scanning, admission controls, and CI security gates that reduced flagged findings by 85%.',
  },
  {
    company: 'Amazon Web Services',
    role: 'AI Software Engineering Intern · Contractual',
    location: 'Los Angeles, CA',
    date: 'Spring 2026',
    detail:
      'Collaborated on a production RAG agent using AWS AgentCore to serve approximately 25,000 UCLA members. Implemented hybrid search, Reciprocal Rank Fusion, context injection, and user sessions, reducing latency from 38 seconds to 5.5 seconds through routing, model selection, caching, and scheduled cold-start jobs.',
  },
  {
    company: 'Diro – Internet Original Documents',
    role: 'Software Engineering Intern · AI',
    location: 'New York, NY',
    date: 'Summer 2025',
    detail:
      'Worked with a team of five to build a production AI-usage tracking platform with LiteLLM, Langfuse, PostgreSQL, and GCP. The platform provided full-stack observability for company-wide AI usage and reduced costs by 28%.',
  },
];

export default function Experience() {
  return (
    <main id="main-content" className="experience-page">
      <div className="experience-heading">
        <div>
          <p className="eyebrow">Where I’ve worked</p>
          <h1>
            Experience<span className="accent">.</span>
          </h1>
        </div>
        <p className="experience-heading-note">
          Research, engineering, and data systems.
        </p>
      </div>
      <div className="roles" aria-label="Work experience">
        {roles.map((role, index) => (
          <article className="role" key={role.company}>
            <span className="paper-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="role-content">
              <div className="role-meta">
                <span>{role.date}</span>
                <span>{role.location}</span>
              </div>
              <h2>{role.company}</h2>
              <p className="role-title">{role.role}</p>
              <p className="role-detail">{role.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="experience-footer">
        <a className="text-link" href={sitePath('/#research')}>
          Read my research <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
