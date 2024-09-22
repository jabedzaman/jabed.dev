export type Article = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  keywords: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  keywords: string[];
  url: string;
  image: string;
  github?: string;
};

export type SpotifyTrack = {
  timestamp: number;
  context: null | any;
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: {
    disallows: {
      resuming: boolean;
      toggling_repeat_context: boolean;
      toggling_repeat_track: boolean;
      toggling_shuffle: boolean;
    };
  };
  is_playing: boolean;
};

export type Top_Tracks = {
  album: {
    album_type: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

export type Top_Artists = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type MusicResponse = {
  current_playing: {
    item: CurrentTrack;
    artists: Artist[];
    is_playing: boolean;
  };
  top_tracks: {
    items: Track[];
  };
  top_artists: {
    items: Artist[];
  };
};

export type CurrentTrack = {
  name: string;
  album: {
    name: string;
    images: Image[];
  };
  external_urls: {
    spotify: string;
  };
  images: Image[];
};

export type Artist = {
  external_urls: {
    spotify: string;
  };
  name: string;
  followers: number;
};

export type Track = {
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  name: string;
  album: {
    name: string;
    external_urls: {
      spotify: string;
    };
  };
  images: Image[];
};

export type Image = {
  height: number;
  width: number;
  url: string;
};

export interface recent_tracks_res {
  items?: ItemsEntity[] | null;
  next: string;
  cursors: Cursors;
  limit: number;
  href: string;
}
export interface ItemsEntity {
  track: Recent_Track;
  played_at: string;
  context: Context;
}
export interface Recent_Track {
  album: Album;
  artists?: ArtistsEntity[] | null;
  available_markets?: string[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string | null;
  track_number: number;
  type: string;
  uri: string;
}
export interface Album {
  album_type: string;
  artists?: ArtistsEntity[] | null;
  available_markets?: string[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: ImagesEntity[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
export interface ArtistsEntity {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
export interface ExternalUrls {
  spotify: string;
}
export interface ImagesEntity {
  height: number;
  url: string;
  width: number;
}
export interface ExternalIds {
  isrc: string;
}
export interface Context {
  type: string;
  external_urls: ExternalUrls;
  href: string;
  uri: string;
}
export interface Cursors {
  after: string;
  before: string;
}
