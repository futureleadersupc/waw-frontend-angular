export interface UserImage {
  href: string;
  alt?: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  timestamp: number;
  href?: string;
  image?: UserImage;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: number;
  endDate: number | null;
  timeDiff: string;
  description: string;
  image?: UserImage;
}

export interface Education {
  id: number;
  university: string;
  description: string;
  startYear: number;
  endYear: number;
  image: UserImage;
}

export interface User {
  id: number;
  preferredName: string;
  fullName: string;
  email: string;
  location: string;
  profileViews: number;
  biography: string;
  about: string;
  cover?: UserImage;
  picture?: UserImage;
  experience: Experience[];
  education: Education[];
}
