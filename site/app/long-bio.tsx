const shortParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus.';
const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const alternateParagraph =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

const sections = [
  {
    paragraphs: [shortParagraph, paragraph, alternateParagraph],
    width: 1344,
    height: 768,
  },
  {
    paragraphs: [paragraph, alternateParagraph, paragraph],
    width: 2522,
    height: 1892,
  },
  {
    paragraphs: [
      shortParagraph,
      alternateParagraph,
      paragraph,
      alternateParagraph,
      paragraph,
    ],
    width: 1220,
    height: 687,
  },
  {
    paragraphs: [alternateParagraph, paragraph, alternateParagraph],
    width: 1344,
    height: 768,
  },
  {
    paragraphs: [
      shortParagraph,
      paragraph,
      alternateParagraph,
      paragraph,
      shortParagraph,
    ],
    width: 1973,
    height: 1316,
  },
  { paragraphs: [paragraph, alternateParagraph], width: 1280, height: 720 },
  { paragraphs: [alternateParagraph, paragraph], width: 2160, height: 1440 },
];

export default function LongBio() {
  return (
    <div className="long-bio">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {section.paragraphs.map((text, paragraphIndex) => (
            <div key={paragraphIndex}>
              <p>{text}</p>
              {sectionIndex === 0 && paragraphIndex === 1 && (
                <details className="bio-details">
                  <summary>Lorem ipsum dolor sit amet, consectetur</summary>
                  <img
                    className="bio-media-placeholder"
                    src="/images/placeholder-landscape.svg"
                    alt="Lorem ipsum media placeholder"
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                </details>
              )}
            </div>
          ))}
          <div className="bio-gallery">
            {[0, 1].map((imageIndex) => (
              <img
                key={imageIndex}
                src="/images/placeholder-landscape.svg"
                alt={`Lorem ipsum image placeholder ${sectionIndex * 2 + imageIndex + 1}`}
                width={section.width}
                height={section.height}
                style={{ aspectRatio: `${section.width} / ${section.height}` }}
                loading="lazy"
              />
            ))}
          </div>
          {sectionIndex === 1 && (
            <details className="bio-details">
              <summary>Sed do eiusmod tempor incididunt ut labore</summary>
              <div className="bio-media-pair">
                {[0, 1].map((imageIndex) => (
                  <img
                    key={imageIndex}
                    className="bio-media-placeholder"
                    src="/images/placeholder-landscape.svg"
                    alt={`Lorem ipsum media placeholder ${imageIndex + 1}`}
                    width={1530}
                    height={1142}
                    loading="lazy"
                  />
                ))}
              </div>
            </details>
          )}
        </div>
      ))}
      <p>{shortParagraph}</p>
      <p>{alternateParagraph}</p>
      <div className="bio-footnote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
    </div>
  );
}
