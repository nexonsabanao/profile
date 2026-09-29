export interface TechnicalSkill {
  name: string;
  category: 'programming' | 'mobile_cloud' | 'hardware_iot' | 'design_tools' | 'office_data';
  level: 'Intermediate' | 'Familiar';
  featured: boolean;
  highlightText?: string;
  tags: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  graduationDate: string;
  location?: string;
  highlights: string[];
}

export interface AccomplishmentMetric {
  id: string;
  metric: string;
  label: string;
  context: string;
  description: string;
  category: 'software' | 'iot' | 'operations' | 'academic';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  fullDescription: string;
  category: 'Android & Mobile' | 'IoT & Embedded Systems' | 'Web & Backend';
  image: string;
  tags: string[];
  keyHighlights: { label: string; value: string }[];
  technicalFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  installerUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  toolsUsed: string[];
}

export interface AccessibilityCheck {
  rule: string;
  requirement: string;
  status: string;
  score: string;
}

export interface AccessibilityReport {
  wcagLevel: string;
  overallScore: string;
  contrastRatio: string;
  checks: AccessibilityCheck[];
}

export interface ProfileData {

  name: string;
  fullNameFormal: string;
  degree: string;
  executiveHeadline: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  avatarImage: string;
  education: EducationInfo;
  targetRoles: string[];
  corePillars: {
    title: string;
    description: string;
    metrics: string;
  }[];
}
