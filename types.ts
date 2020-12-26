export type Publication = {
  id: string;
  name: string;
  domain: string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  tagline: string;
  publication: Publication;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  url: string;
  canonicalURL?: string;
  contentMarkdown: string;
};
