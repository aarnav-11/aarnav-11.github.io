import type { Metadata } from 'next';
import Link from 'next/link';
import {
  activities,
  actSubjects,
  coursework,
  ibSubjects,
} from '@/lib/coursework';

export const metadata: Metadata = {
  title: 'Coursework — Aarnav Choudhary',
  description:
    'UCLA coursework, campus activities, independent learning, and the code I wrote along the way.',
};

export default function CourseworkPage() {
  return (
    <main className="site-shell">
      <article className="content-frame">
        <header className="site-header">
          <Link
            href="/"
            className="site-title coursework-home"
            aria-label="aarnav home"
          >
            <span className="site-title-at">@</span>aarnav
          </Link>
          <nav className="profile-links" aria-label="Site navigation">
            <Link className="text-link" href="/">
              Home
            </Link>
            <Link className="text-link" href="/coursework" aria-current="page">
              Coursework
            </Link>
            <a
              className="text-link"
              href="https://github.com/aarnav-11"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </header>

        <h1 className="coursework-title">Coursework</h1>
        <p>
          My classes at UCLA, things I’ve learned on my own, and the code along
          the way.
        </p>

        <section className="coursework-section">
          <h2>Test scores</h2>
          <details className="test-scores">
            <summary>IB Diploma — 43/45</summary>
            <dl className="test-subjects">
              {ibSubjects.map(({ subject, score }) => (
                <div key={subject}>
                  <dt>{subject}</dt>
                  <dd>{score}/7</dd>
                </div>
              ))}
            </dl>
          </details>
          <details className="test-scores">
            <summary>ACT — 34/36</summary>
            <dl className="test-subjects">
              {actSubjects.map(({ subject, score }) => (
                <div key={subject}>
                  <dt>{subject}</dt>
                  <dd>{score}/36</dd>
                </div>
              ))}
            </dl>
          </details>
          <div className="test-scores">IELTS — 8.5/9</div>
        </section>

        {coursework.map(({ title, courses }) => (
          <section className="coursework-section" key={title}>
            <h2>{title}</h2>
            <ul className="coursework-list">
              {courses.map((course) => (
                <li className="coursework-entry" key={course.code}>
                  <div className="coursework-meta">
                    <span>{course.code}</span>
                    {course.term && <span>{course.term}</span>}
                  </div>
                  <h3>{course.title}</h3>
                  {course.description && <p>{course.description}</p>}
                  {course.links.length > 0 && (
                    <ul
                      className="profile-links coursework-links"
                      aria-label={`${course.code} code`}
                    >
                      {course.links.map(({ label, href }) => (
                        <li key={href}>
                          <a
                            className="text-link"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="coursework-section">
          <h2>Activities &amp; societies</h2>
          <ul className="notes-list">
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
