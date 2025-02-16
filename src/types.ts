export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  downloadUrl: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  profile: string;
  savedTools: string[];
}

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}