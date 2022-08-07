export interface IArticle {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl:string;
  newsSite:string;
  summary:string;
  publishedAt:string;
  launches:{id:string}[]
}
