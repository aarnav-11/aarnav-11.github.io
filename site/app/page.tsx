import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { sitePath } from '@/lib/site';

export default function Home() {
  return (
    <main id="main-content">
      <section className="intro" id="about" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">Computer science · Mathematics · UCLA</p>
          <h1 id="intro-title">
            Aarnav
            <br />
            Choudhary<span className="accent">.</span>
          </h1>
          <p className="intro-lead">
            Studying how machines learn,
            <br /> reason, and generalize.
          </p>
          <p className="intro-description">
            I’m a Computer Science and Mathematics undergraduate at UCLA and a
            researcher in Professor Baharan Mirzasoleiman’s BigML Lab, working
            on efficient post-training for language models.
          </p>
          <p className="intro-description">
            My interests span representation learning, automated theorem
            proving, and AI safety. I also build AI systems that put research
            into practice.
          </p>
          <div className="intro-links">
            <a
              className={buttonVariants({
                className: 'primary-link',
                size: 'lg',
              })}
              href="mailto:aarnav11@g.ucla.edu"
            >
              Get in touch <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="portrait">
          {/* A plain image keeps the headshot as a static GitHub Pages asset. */}
          {/* oxlint-disable-next-line next/no-img-element */}
          <img
            src={sitePath('/images/headshot.jpg')}
            alt="Aarnav Choudhary at UCLA"
            width={1280}
            height={1920}
            fetchPriority="high"
          />
          <figcaption>Based in Los Angeles, CA</figcaption>
        </figure>
      </section>

      <section
        className="research-section"
        id="research"
        aria-labelledby="research-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Questions I’m working on</p>
            <h2 id="research-title">Selected research</h2>
          </div>
          <span className="section-note">2026 · 2 papers</span>
        </div>
        <article className="paper">
          <span className="paper-number" aria-hidden="true">
            01
          </span>
          <div>
            <div className="paper-meta">
              <span>Representation learning</span>
              <span>Preprint · 2026</span>
            </div>
            <h3>
              <a
                href={sitePath('/documents/jepa-lean-theorem-proving.pdf')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Predicting the Next State Is Not Enough: JEPA Representations
                for Lean Theorem Proving
              </a>
            </h3>
            <p className="authors">Aarnav Choudhary</p>
            <p className="paper-description">
              Can predicting the next proof state guide a theorem prover? A
              controlled study of JEPA representations in Lean finds that better
              one-step transition ranking does not translate into more completed
              proofs.
            </p>
            <a
              className="text-link"
              href={sitePath('/documents/jepa-lean-theorem-proving.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the paper <ArrowUpRight size={16} aria-hidden="true" />
              <span className="file-label">PDF</span>
            </a>
          </div>
        </article>
        <article className="paper">
          <span className="paper-number" aria-hidden="true">
            02
          </span>
          <div>
            <div className="paper-meta">
              <span>Model merging · AI safety</span>
              <span>arXiv · July 2026</span>
            </div>
            <h3>
              <a
                href="https://arxiv.org/abs/2607.27240"
                target="_blank"
                rel="noopener noreferrer"
              >
                Asymmetric Collapse in Model Merging: When Refusal Overwrites
                Recognition
              </a>
            </h3>
            <p className="authors">
              Aarnav Choudhary, Matheus Fonseca Rocha, Jiwon Seo, Vasu Sharma,
              and Maheep Chaudhary
            </p>
            <p className="paper-description">
              Combining safety fine-tunes can preserve refusal while losing harm
              recognition. Across four merging methods, jailbreak refusal
              remains at 81–85% while classification accuracy falls to at most
              12.9%.
            </p>
            <a
              className="text-link"
              href="https://arxiv.org/abs/2607.27240"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on arXiv <ArrowUpRight size={16} aria-hidden="true" />
              <span className="file-label">2607.27240</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
