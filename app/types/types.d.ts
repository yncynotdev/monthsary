import type { Tables } from "~/types/database.types"

// used in /utils/mock/roadmap.ts
export type MockRoadmap = {
  img: string;
  title: string;
  description: string;
  date?: string;
  done?: boolean;
};

// used in /utils/mock/gallery.ts
export type MockGallery = {
  image_url: string;
  description: string;
  date: string;
};

// used in /app/components/index/Gallery
export type GalleryCard = {
  imgSrc: string;
  header: string;
  description: string;
}

// types for database.types 
export type DatePlan = Tables<"date_plan">
export type DimDate = Tables<"dim_date">
export type Images = Tables<"images">
export type IndexMemories = Tables<"index_memories">
export type Roadmap = Tables<"roadmap">
