
export interface WritingSample {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  skillsHighlighted: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  brandStatement: string;
  intro: string;
  aboutMe: string;
  skills: string[];
  samples: WritingSample[];
  contact: {
    email: string;
    linkedin: string;
    medium: string;
    location: string;
  };
}
