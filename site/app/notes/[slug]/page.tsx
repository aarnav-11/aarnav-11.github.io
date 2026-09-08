import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getContent, notes } from '@/lib/content';

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getContent(params.slug);
  return note ? { title: `${note.title} — aarnav` } : {};
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getContent(params.slug);
  if (!note || note.kind !== 'note') notFound();

  return (
    <main className="site-shell article-page">
      <header className="site-header">
        <Link className="site-name" href="/" aria-label="aarnav home">
          aarnav
        </Link>
        <Link className="back-link" href="/">
          ← back home
        </Link>
      </header>
      <article className="article-content">
        <p className="eyebrow">Note</p>
        <h1>{note.title}</h1>
        <p className="article-dek">{note.description}</p>
        <div className="article-body">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curiosity is a useful place to
            begin.
          </blockquote>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer posuere erat a ante venenatis dapibus.</li>
            <li>Donec sed odio dui, vitae posuere quam.</li>
          </ul>
          <pre>
            <code>{`const idea = "lorem ipsum";\nconsole.log(idea);`}</code>
          </pre>
        </div>
      </article>
      <footer className="site-footer">
        <span>© 2026 aarnav</span>
        <Link href="/">home</Link>
      </footer>
    </main>
  );
}
