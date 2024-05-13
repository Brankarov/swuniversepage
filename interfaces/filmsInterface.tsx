import { Character } from "./characterInterface";

export interface Film {
    
    id: number;
    title?: string;
    img?: string;
    episode_id?: string;
    opening_crawl?: string;
    director: string;
    characters: Character[];
    url: string;
  }