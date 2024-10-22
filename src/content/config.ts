import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});

export const collections = {
  posts: articlesCollection,
};
