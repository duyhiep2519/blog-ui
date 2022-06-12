export interface FeaturedPost {
   id: string;
   title: string;
   description: string;
   imageUrl: string;
   to: string;
   timeToRead?: number;
   timeStamp: string;
   author: string;
   category?: string[];
}
