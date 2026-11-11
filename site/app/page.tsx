'use client';

import { useState } from 'react';
import Link from 'next/link';
import LongBio from './long-bio';

const experience = [
  {
    title: 'Retriever Labs — Safety Researcher',
  },
  {
    title: 'UCLA DTS — AI Software Engineer',
    date: 'Aug 2026–Present',
  },
  {
    title: 'BigML Lab @ UCLA — Undergraduate Researcher',
    date: 'Aug 2026–Present',
  },
  {
    title: 'EXL (EXLData.ai) — Data Management Intern',
    date: 'Summer 2026',
  },
  {
    title: '(Contract) Amazon Web Services — AI Software Engineering Intern',
    date: 'Spring 2026',
  },
  {
    title: 'Diro — Software Engineering Intern (AI)',
    date: 'Summer 2025',
  },
];

const research = [
  {
    title:
      'Beyond Prompt Selection: Learning to Allocate Rollouts for Efficient GRPO Training',
    date: 'Under review · ICLR 2027',
    href: 'https://openreview.net/forum?id=5okwaPNsME',
  },
  {
    title:
      'Predicting the Next State Is Not Enough: JEPA Representations for Lean Theorem Proving',
    date: 'MathNLP Workshop: EMNLP 2026',
    href: '/documents/jepa-lean-theorem-proving.pdf',
  },
  {
    title:
      'Asymmetric Collapse in Model Merging: When Refusal Overwrites Recognition',
    date:
      'AIW Workshop: COLM 2026 · Adv-ML × CoTMA Frontiers Workshop: COLM 2026',
    href: 'https://arxiv.org/abs/2607.27240',
  },
];

export default function Home() {
  const [isLongBio, setIsLongBio] = useState(false);

  return (
    <main className="site-shell home-shell">
      <article className="content-frame">
        <div className="home-layout">
          <div className="home-copy">
            <header className="site-header">
              <h1 className="site-title">
                <span className="site-title-at">@</span>aarnav
              </h1>
              <nav
                className="profile-links"
                aria-label="Site and profile links"
              >
                <Link className="text-link" href="/coursework">
                  Coursework
                </Link>
                <a
                  className="text-link"
                  href="/documents/aarnav-choudhary-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a className="text-link" href="mailto:aarnav11@g.ucla.edu">
                  Email
                </a>
                <a
                  className="text-link"
                  href="https://github.com/aarnav-11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/aarnavchou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-link"
                  href="https://x.com/aarnav2006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </nav>
            </header>

            <section className="bio-section" aria-label="Biography">
              <div className="bio-toggle">
                <span>Bio</span>
                <div
                  className="bio-toggle-options"
                  role="group"
                  aria-label="Bio length"
                >
                  <button
                    type="button"
                    aria-controls="bio-content"
                    aria-pressed={!isLongBio}
                    onClick={() => setIsLongBio(false)}
                  >
                    Default
                  </button>
                  <button
                    type="button"
                    aria-controls="bio-content"
                    aria-pressed={isLongBio}
                    onClick={() => setIsLongBio(true)}
                  >
                    Long
                  </button>
                </div>
              </div>
              <div id="bio-content">
                {isLongBio ? (
                  <LongBio />
                ) : (
                  <>
                    <p>
                      I’m a student and engineer at UCLA, where I study computer
                      science and mathematics and conduct research at the{' '}
                      <a
                        className="text-link"
                        href="https://baharanm.github.io/bigml/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BigML Lab
                      </a>
                      .
                    </p>
                  </>
                )}
              </div>
            </section>

            <div className="writing-index">
              <section aria-labelledby="notes-heading">
                <h2 id="notes-heading">Experience</h2>
                <div className="blogs-list">
                  {experience.map(({ title, date }) => (
                    <div className="blog-row" key={title}>
                      <span>{title}</span>
                      {date && <span className="blog-date">{date}</span>}
                    </div>
                  ))}
                </div>
              </section>
              <section aria-labelledby="blogs-heading">
                <h2 id="blogs-heading">Research</h2>
                <div className="blogs-list">
                  {research.map(({ title, date, href }) => (
                    <div className="blog-row research-row" key={title}>
                      <a
                        className="text-link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                      <span className="blog-date">{date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside
            className="home-visual"
            aria-label="A gently moving paper theater with a king and playing cards"
          >
            <div className="poker-scene" aria-hidden="true">
              {/* oxlint-disable-next-line next/no-img-element */}
              <img
                className="poker-layer poker-stage"
                src="/images/poker-stage.webp"
                alt=""
                width={1122}
                height={1402}
                fetchPriority="high"
              />
              {/* oxlint-disable-next-line next/no-img-element */}
              <img
                className="poker-layer poker-shuffle poker-shuffle-rear"
                src="/images/poker-shuffle.webp"
                alt=""
                width={1000}
                height={914}
              />
              {/* oxlint-disable-next-line next/no-img-element */}
              <img
                className="poker-layer poker-king"
                src="/images/poker-king.webp"
                alt=""
                width={900}
                height={1350}
              />
              {/* oxlint-disable-next-line next/no-img-element */}
              <img
                className="poker-layer poker-shuffle poker-shuffle-front"
                src="/images/poker-shuffle-front.webp"
                alt=""
                width={1312}
                height={1199}
              />
              <div className="poker-scene-wash" />
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
