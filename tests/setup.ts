/* eslint-disable max-classes-per-file */
import { vi } from 'vitest';

// Mock maplibre-gl
vi.mock('maplibre-gl', () => {
  class MockMap {
    on = vi.fn();

    off = vi.fn();

    loaded = vi.fn(() => true);

    isStyleLoaded = vi.fn(() => true);

    getStyle = vi.fn(() => ({
      layers: [
        { id: 'layer1', type: 'fill' },
        { id: 'layer2', type: 'line' },
      ],
    }));

    moveLayer = vi.fn();

    setLayoutProperty = vi.fn();

    setStyle = vi.fn();

    resize = vi.fn();

    getContainer = vi.fn(() => ({
      style: {},
      getBoundingClientRect: vi.fn(() => ({
        width: 800,
        height: 600,
        left: 0,
        top: 0,
      })),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    remove = vi.fn();
  }

  const Map = vi.fn(MockMap);

  return {
    default: {
      Map,
      addProtocol: vi.fn(),
    },
    Map,
  };
});

// Mock @mapbox/mapbox-gl-sync-move
vi.mock('@mapbox/mapbox-gl-sync-move', () => ({
  default: vi.fn(() => vi.fn()), // Returns a cleanup function
}));

// Mock pmtiles
vi.mock('pmtiles', () => {
  class MockProtocol {
    tile = vi.fn();
  }

  return {
    Protocol: vi.fn(MockProtocol),
  };
});
