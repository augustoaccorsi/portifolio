export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  updated_at: string;
  topics: string[];
}

export interface WorkExperience {
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  duration: string;
  location: string;
  contract: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  focus?: string;
  start_date: string;
  end_date: string;
  location: string;
}

export interface Achievement {
  name: string;
  year: string;
  autor: string;
  periodic: string;
  url?: string;
}

export interface TechItem {
  name: string;
  logo: string;
}
