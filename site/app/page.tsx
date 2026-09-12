'use client';

import { useState } from 'react';
import LongBio from './long-bio';

const notes = [
  'Lorem ipsum dolor',
  'Consectetur adipiscing',
  'Sed do eiusmod tempor',
  'Incididunt ut labore',
  'Dolore magna aliqua',
  'Ut enim ad minim',
  'Quis nostrud',
  'Exercitation ullamco',
  'Laboris nisi aliquip',
  'Commodo consequat',
];

const blogs = [
  ['Lorem ipsum dolor sit amet', 'Lorem 0000'],
  ['Consectetur adipiscing elit sed do eiusmod tempor', 'Dolorem 0000'],
  ['Ut enim ad minim veniam quis nostrud', 'Dolorem 0000'],
  ['Duis aute irure dolor in reprehenderit', 'Ipsum 0000'],
  ['Excepteur sint occaecat cupidatat non proident', 'Lorem 0000'],
  ['Sed ut perspiciatis unde omnis', 'Dolorem 0000'],
  ['Nemo enim ipsam voluptatem', 'Sit 0000'],
  ['Neque porro quisquam est', 'Dolorem 0000'],
];

export default function Home() {
  const [isLongBio, setIsLongBio] = useState(false);

  return (
    <main className="site-shell home-shell">
      <article className="content-frame">
        <div className="home-layout">
          <div className="home-copy">
            <h1 className="site-title">
              <span className="site-title-at">@</span>loremipsum
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut{' '}
                      <span className="placeholder-link">labore</span> et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud{' '}
                      <span className="placeholder-link">exercitation</span>{' '}
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut{' '}
                      <span className="placeholder-link">odit aut fugit</span>.
                    </p>
                  </>
                )}
              </div>
            </section>

            <div className="writing-index">
              <section aria-labelledby="notes-heading">
                <h2 id="notes-heading">Notes</h2>
                <ul className="notes-list">
                  {notes.map((note) => (
                    <li key={note}>
                      <span className="placeholder-link">{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="blogs-heading">
                <h2 id="blogs-heading">Blogs</h2>
                <div className="blogs-list">
                  {blogs.map(([title, date]) => (
                    <div className="blog-row" key={title}>
                      <span>{title}</span>
                      <span className="blog-date">{date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="home-visual" aria-label="Image placeholder">
            <img
              className="home-visual-image"
              src="/images/placeholder.svg"
              alt="Lorem ipsum image placeholder"
              width={800}
              height={1200}
            />
          </aside>
        </div>
      </article>
    </main>
  );
}
