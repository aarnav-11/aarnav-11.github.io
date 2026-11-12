import type { Metadata } from 'next';
import {
  activities,
  actSubjects,
  coursework,
  ibSubjects,
  type Course,
} from '@/lib/coursework';

export const metadata: Metadata = {
  title: 'Coursework — Aarnav Choudhary',
  description: 'UCLA coursework, clubs, independent learning, and test scores.',
};

function CourseList({ courses }: { courses: Course[] }) {
  return (
    <ul className="coursework-list">
      {courses.map(({ code, title, links }) => (
        <li className="coursework-entry" key={code}>
          <span className="coursework-code">{code}</span> — {title}
          {links.map(({ label, href }) => (
            <span key={href}>
              {' · '}
              <a
                className="text-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default function CourseworkPage() {
  const [mathematics, computerScience, independentLearning] = coursework;

  return (
    <main className="site-shell coursework-page">
      <article className="content-frame">
        <header className="site-header">
          <a
            href="/"
            className="site-title coursework-home"
            aria-label="aarnav home"
          >
            <span className="site-title-at">@</span>aarnav
          </a>
          <nav className="profile-links" aria-label="Site navigation">
            <a className="text-link" href="/">
              Home
            </a>
            <a className="text-link" href="/coursework" aria-current="page">
              Coursework
            </a>
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

        <section className="coursework-section" aria-labelledby="clubs-heading">
          <h2 id="clubs-heading">Clubs &amp; societies</h2>
          <ul className="coursework-activities">
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </section>

        <section
          className="coursework-section"
          aria-labelledby="courses-heading"
        >
          <h2 id="courses-heading">Coursework</h2>
          <div className="coursework-columns">
            {[mathematics, computerScience].map(({ title, courses }) => (
              <section key={title}>
                <h3>{title}</h3>
                <CourseList courses={courses} />
              </section>
            ))}
          </div>
        </section>

        <section className="coursework-section">
          <h2>{independentLearning.title}</h2>
          <CourseList courses={independentLearning.courses} />
          <a
            className="text-link coursework-repository"
            href={independentLearning.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </section>

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
      </article>
    </main>
  );
}
