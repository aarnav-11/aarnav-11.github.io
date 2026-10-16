'use client';

import { useEffect, useState, type KeyboardEvent, type MouseEvent } from 'react';

type Location = { latitude: number; longitude: number };
type TravelPin = Location & { name: string };
const storageKey = 'aarnav-travel-pins';

export default function TravelMap() {
  const [pins, setPins] = useState<TravelPin[]>([]);
  const [selected, setSelected] = useState<Location | null>(null);
  const [name, setName] = useState('');
  const [persistent, setPersistent] = useState(true);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
      if (Array.isArray(saved)) {
        setPins(
          saved.filter(
            (pin): pin is TravelPin =>
              typeof pin?.name === 'string' &&
              Number.isFinite(pin?.latitude) &&
              Number.isFinite(pin?.longitude),
          ),
        );
      }
    } catch {
      setPersistent(false);
    }
  }, []);

  function savePins(next: TravelPin[]) {
    setPins(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setPersistent(true);
    } catch {
      setPersistent(false);
    }
  }

  function chooseLocation(event: MouseEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSelected(
      event.detail === 0
        ? (selected ?? { latitude: 0, longitude: 0 })
        : {
            latitude: 90 - ((event.clientY - bounds.top) / bounds.height) * 180,
            longitude: ((event.clientX - bounds.left) / bounds.width) * 360 - 180,
          },
    );
  }

  function moveSelection(event: KeyboardEvent<HTMLButtonElement>) {
    const step = event.shiftKey ? 10 : 2;
    const offsets: Record<string, [number, number]> = {
      ArrowUp: [step, 0],
      ArrowDown: [-step, 0],
      ArrowLeft: [0, -step],
      ArrowRight: [0, step],
    };
    const offset = offsets[event.key];
    if (!offset) return;
    event.preventDefault();
    const point = selected ?? { latitude: 0, longitude: 0 };
    setSelected({
      latitude: Math.max(-90, Math.min(90, point.latitude + offset[0])),
      longitude: Math.max(-180, Math.min(180, point.longitude + offset[1])),
    });
  }

  return (
    <figure className="travel-map">
      <figcaption>Places I’ve been</figcaption>
      <button
        type="button"
        className="travel-map-surface"
        aria-label="Choose a place on the map. Use arrow keys to move the pin."
        onClick={chooseLocation}
        onKeyDown={moveSelection}
      >
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <image href="/images/world-map.svg" width="720" height="360" />
          {pins.map((pin, index) => (
            <circle
              key={index}
              className="travel-map-pin"
              cx={(pin.longitude + 180) * 2}
              cy={(90 - pin.latitude) * 2}
              r="5"
            >
              <title>{pin.name}</title>
            </circle>
          ))}
          {selected && (
            <circle
              className="travel-map-selection"
              cx={(selected.longitude + 180) * 2}
              cy={(90 - selected.latitude) * 2}
              r="7"
            />
          )}
        </svg>
      </button>
      <p className="travel-map-note">
        Click a spot to add a pin; arrow keys fine-tune its position.{' '}
        {persistent
          ? 'Pins are saved in this browser.'
          : 'Browser storage is unavailable; pins will last for this visit.'}
      </p>
      {selected && (
        <form
          className="travel-pin-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (!name.trim()) return;
            savePins([...pins, { ...selected, name: name.trim() }]);
            setSelected(null);
            setName('');
          }}
        >
          <label>
            Place name
            <input
              required
              maxLength={80}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name this place"
            />
          </label>
          <button className="travel-button" type="submit">
            Add pin
          </button>
          <button
            className="travel-button"
            type="button"
            onClick={() => {
              setSelected(null);
              setName('');
            }}
          >
            Cancel
          </button>
        </form>
      )}
      {pins.length > 0 && (
        <ul className="travel-pin-list" aria-label="Pinned places">
          {pins.map((pin, index) => (
            <li key={index}>
              <button
                className="travel-button"
                type="button"
                aria-label={`Remove ${pin.name} pin`}
                onClick={() => savePins(pins.filter((_, i) => i !== index))}
              >
                {pin.name} <span aria-hidden="true">×</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
