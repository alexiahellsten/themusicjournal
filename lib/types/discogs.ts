export interface DiscogsArtist {
  id: number;
  name: string;
  anv?: string;
  role?: string;
  resource_url?: string;
  thumbnail_url?: string;
}

export interface DiscogsImage {
  type: string;
  uri: string;
  uri150?: string;
  width?: number;
  height?: number;
}

export interface DiscogsLabel {
  id: number;
  name: string;
  catno?: string;
  entity_type?: string;
  entity_type_name?: string;
}

export interface DiscogsTrack {
  position: string;
  title: string;
  duration?: string;
}

export interface DiscogsRelease {
  id: number;

  title: string;

  year?: number;

  artists: DiscogsArtist[];

  images?: DiscogsImage[];

  labels?: DiscogsLabel[];

  genres?: string[];

  styles?: string[];

  tracklist?: DiscogsTrack[];

  resource_url?: string;

  uri?: string;
}

export interface DiscogsSearchResponse {
  pagination: {
    page: number;
    pages: number;
    per_page: number;
    items: number;
  };

  results: DiscogsSearchResult[];
}

export interface DiscogsSearchResult {
  id: number;

  title: string;

  year?: number;

  type: string;

  cover_image: string;

  thumb: string;

  genre?: string[];

  style?: string[];

  label?: string[];

  country?: string;

  resource_url: string;
}
