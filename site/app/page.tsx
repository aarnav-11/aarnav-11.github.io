import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { notes, writing } from '@/lib/content';

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="site-name" href="/" aria-label="aarnav home">
          aarnav
        </Link>
        <nav className="social-links" aria-label="Social links">
          <a href="mailto:aarnav11@g.ucla.edu" aria-label="Email aarnav">
            <Mail size={15} strokeWidth={1.8} />
            <span>email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aarnavchou"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>
          <a
            href="https://www.github.com/aarnav-11"
            target="_blank"
            rel="noreferrer"
          >
            github
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>
          <a href="https://x.com/aarnav2006" target="_blank" rel="noreferrer">
            x
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>
        </nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">CS + Math · UCLA</p>
          <h1 id="intro-title">I’m a student who likes making complex ideas clear.</h1>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. I study computer science and
            mathematics at UCLA, and I enjoy learning in public through writing, research, and
            small software projects.
          </p>
        </div>
        <Image
          className="headshot"
          src="/images/headshot.jpg"
          alt="Portrait of aarnav"
          width={176}
          height={176}
        />
      </section>

      <section className="content-section" aria-labelledby="notes-title">
        <div className="section-heading">
          <h2 id="notes-title">Notes</h2>
          <span>ideas in progress</span>
        </div>
        <div className="link-list">
          {notes.map((note) => (
            <Link className="content-link" href={`/notes/${note.slug}`} key={note.slug}>
              <span>{note.title}</span>
              <span className="link-description">{note.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="writing-title">
        <div className="section-heading">
          <h2 id="writing-title">Writing</h2>
          <span>recent posts</span>
        </div>
        <div className="writing-list">
          {writing.map((post) => (
            <Link className="writing-row" href={`/writing/${post.slug}`} key={post.slug}>
              <span>{post.title}</span>
              <time>{post.date}</time>
            </Link>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 aarnav</span>
        <Link href="/documents/jepa-lean-theorem-proving.pdf">research</Link>
      </footer>
    </main>
  );
}
