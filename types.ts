
export interface Artwork {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'Landscape' | 'Architecture' | 'Mural' | 'Artist';
}

export enum Section {
  HERO = 'hero',
  GALLERY = 'gallery',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact'
}
