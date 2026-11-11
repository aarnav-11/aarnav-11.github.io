import TravelMap from './travel-map';

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
      <p>
        Outside of research, I enjoy poker for the mix of strategy, probability,
        and making decisions with incomplete information. I also play Catan and
        FIFA, and used to play Fortnite. I’m a Manchester United fan, too.
      </p>
      <p>
        I played tennis for 14 years, but I’ll play just about any sport,
        including basketball, cricket, and soccer. These days, I lift, too.
      </p>
      <figure className="bio-inline-media bio-photo-placeholder">
        Tennis photo placeholder
      </figure>
      <p>
        I love traveling and getting to know new places through their food. Bali
        is my favorite place in the world. I enjoy finding somewhere new to eat
        as much as cooking something myself. You can follow my running list of
        favorites on{' '}
        <a
          className="text-link"
          href="https://beliapp.co/app/aarnav11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beli
        </a>
        .
      </p>
      <TravelMap />
      <figure className="bio-inline-media bio-photo-placeholder">
        Food &amp; cooking photo placeholder
      </figure>
    </div>
  );
}
