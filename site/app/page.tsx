'use client';

import { useState } from 'react';
import LongBio from './long-bio';

const experience = [
  {
    title: 'BigML Lab @ UCLA — Undergraduate Researcher',
    date: 'Aug 2026–Present',
  },
  {
    title: 'EXL (EXLData.ai) — Data Management Intern',
    date: 'Summer 2026',
  },
  {
    title: 'Amazon Web Services — AI Software Engineering Intern',
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
      'Asymmetric Collapse in Model Merging: When Refusal Overwrites Recognition',
    date: 'July 2026',
    href: 'https://arxiv.org/abs/2607.27240',
  },
  {
    title:
      'Predicting the Next State Is Not Enough: JEPA Representations for Lean Theorem Proving',
    date: '2026',
    href: '/documents/jepa-lean-theorem-proving.pdf',
  },
];

export default function Home() {
  const [isLongBio, setIsLongBio] = useState(false);

  return (
    <main className="site-shell home-shell">
      <article className="content-frame">
        <div className="home-layout">
          <div className="home-copy">
            <h1 className="site-title">
              <span className="site-title-at">@</span>aarnav
            </h1>

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
                      <span className="blog-date">{date}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section aria-labelledby="blogs-heading">
                <h2 id="blogs-heading">Research</h2>
                <div className="blogs-list">
                  {research.map(({ title, date, href }) => (
                    <div className="blog-row" key={title}>
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
            aria-label="Portrait of Aarnav Choudhary"
          >
            <img
              className="home-visual-image"
              src="/images/headshot.jpg"
              alt="Aarnav Choudhary at UCLA"
              width={1280}
              height={1920}
            />
          </aside>
        </div>
      </article>
    </main>
  );
}
