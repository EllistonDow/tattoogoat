import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artists = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/artists' }),
  schema: z.object({
    name: z.string(),
    handle: z.string(),
    headline: z.string(),
    city: z.string(),
    country: z.string(),
    studio: z.string(),
    styles: z.array(z.string()),
    badge: z.string().default('GOAT Hall of Fame'),
    bio: z.string(),
    instagram: z.string(),
    bookingUrl: z.string().optional(),
    bookingStatus: z.enum(['Open', 'Waitlist', 'Books Closed', 'Guest Spot', 'By Referral']).default('Open'),
    avatar: z.string(),
    coverImage: z.string(),
    signatureWork: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        tag: z.string().optional(),
      })
    ).default([]),
    experienceYears: z.number().optional(),
    awards: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    rank: z.number().default(99),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['aftercare', 'machines', 'inks', 'numbing', 'education']),
    categoryLabel: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    readTime: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      avatar: z.string(),
    }),
    heroImage: z.string(),
    featured: z.boolean().default(false),
    topPicks: z.array(
      z.object({
        name: z.string(),
        badge: z.string(),
        rating: z.number(),
        keyFeature: z.string(),
        priceTier: z.string(),
        pros: z.array(z.string()),
        cons: z.array(z.string()),
        affiliateUrl: z.string(),
        image: z.string(),
      })
    ).default([]),
  }),
});

export const collections = { artists, guides };
