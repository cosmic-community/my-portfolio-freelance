export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    short_description?: string;
    full_description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    screenshots?: Array<{
      url: string;
      imgix_url: string;
    }>;
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: { key: string; value: string } | string;
    proficiency?: { key: string; value: string } | string;
    years_experience?: number;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company_name?: string;
    job_title?: string;
    start_date?: string;
    end_date?: string;
    current?: boolean;
    description?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}