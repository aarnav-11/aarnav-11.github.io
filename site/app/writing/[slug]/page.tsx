import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getContent, writing } from '@/lib/content';

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getContent(params.slug);
  return post ? { title: `${post.title} — aarnav` } : {};
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const post = getContent(params.slug);
  if (!post || post.kind !== 'writing') notFound();

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
        <p className="eyebrow">Writing · {post.date}</p>
        <h1>{post.title}</h1>
        <p className="article-dek">{post.description}</p>
        <div className="article-body">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>A small heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur.
          </p>
        </div>
      </article>
      <footer className="site-footer">
        <span>© 2026 aarnav</span>
        <Link href="/">home</Link>
      </footer>
    </main>
  );
}
