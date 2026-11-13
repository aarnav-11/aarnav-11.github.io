import { visitedPlaces } from '@/lib/travel';

export default function TravelMap() {
  return (
    <figure className="travel-map">
      <svg
        className="travel-map-surface"
        viewBox="0 0 720 360"
        role="img"
        aria-label="World map showing places I’ve visited"
      >
        <image href="/images/world-map.svg" width="720" height="360" />
        {visitedPlaces.map((place) => (
          <circle
            key={place.name}
            className="travel-map-pin"
            cx={(place.longitude + 180) * 2}
            cy={(90 - place.latitude) * 2}
            r="5"
          >
            <title>{place.name}</title>
          </circle>
        ))}
      </svg>
    </figure>
  );
}
