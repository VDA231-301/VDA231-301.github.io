import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().optional().default(0),
    description: z.string().optional(),
  }),
});

export const collections = {
  'news-en': newsCollection,
  'news-de': newsCollection,
  'docs-en': docsCollection,
  'docs-de': docsCollection,
};
