export default function LongBio() {
  return (
    <div className="long-bio">
      <p>
        I’m an engineer and student at UCLA studying computer science and
        mathematics.
      </p>
      <p>
        I conduct research at the{' '}
        <a
          className="text-link"
          href="https://baharanm.github.io/bigml/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BigML Lab
        </a>
        , where my current interests center on efficient post-training for
        language models.
      </p>
      <p>
        Previously, I studied how{' '}
        <a
          className="text-link"
          href="https://arxiv.org/abs/2607.27240"
          target="_blank"
          rel="noopener noreferrer"
        >
          model merging can preserve refusal while erasing harm recognition
        </a>
        , and explored{' '}
        <a
          className="text-link"
          href="/documents/jepa-lean-theorem-proving.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          self-supervised representation learning for Lean theorem proving
        </a>
        .
      </p>
    </div>
  );
}
