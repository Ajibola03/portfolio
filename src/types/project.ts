type Project = {
    name: string;
    slug: string;
    shortDescription: string; // Contains HTML string
    description: string;      // Contains HTML string
    coverImage: string;
    images: string[];
    url: string;
    github: string;
    tech: string[];
    favorite?: boolean;
};


export default Project;