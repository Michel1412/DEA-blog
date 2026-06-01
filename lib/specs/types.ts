import { z } from 'zod'

export const versionSchema = z.object({
  contentVersion: z.string(),
  releasedAt: z.string(),
  approvedBy: z.string(),
  specFile: z.string().optional(),
})

export const routeItemSchema = z.object({
  label: z.string(),
  path: z.string(),
  parent: z.string().optional(),
})

export const routesSchema = z.object({
  items: z.array(routeItemSchema),
})

export const paragraphSectionSchema = z.object({
  type: z.literal('paragraphs'),
  title: z.string(),
  variant: z.enum(['default', 'highlight']).optional(),
  paragraphs: z.array(z.string()),
  quote: z.string().optional(),
  cta: z
    .object({
      label: z.string(),
      href: z.string(),
      style: z.enum(['instagram', 'primary', 'link']).optional(),
    })
    .optional(),
})

export const quoteBlockSchema = z.object({
  type: z.literal('quote'),
  text: z.string(),
})

export const cardSectionSchema = z.object({
  type: z.literal('card'),
  title: z.string(),
  variant: z.enum(['default', 'highlight']).optional(),
  paragraphs: z.array(z.string()),
  quote: z.string().optional(),
})

export const heroSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  quote: z.string().optional(),
  backgroundImage: z.string(),
  overlay: z.string().optional(),
  logo: z
    .object({
      src: z.string(),
      alt: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    })
    .optional(),
})

export const contentSectionSchema = z.union([
  paragraphSectionSchema,
  cardSectionSchema,
  quoteBlockSchema,
])

export const contentPageSchema = z.object({
  slug: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: heroSchema,
  sections: z.array(contentSectionSchema),
})

export const homeContentSchema = contentPageSchema.extend({
  slug: z.literal('home'),
  sections: z.array(paragraphSectionSchema),
})

export const nossaSenhoraAuxiliadoraContentSchema = contentPageSchema.extend({
  slug: z.literal('nossa-senhora-auxiliadora'),
  sections: z.array(z.union([cardSectionSchema, quoteBlockSchema])),
})

export const nossaSenhoraMedjugorjeContentSchema = contentPageSchema.extend({
  slug: z.literal('nossa-senhora-medjugorje'),
  sections: z.array(z.union([cardSectionSchema, quoteBlockSchema])),
})

export const titulosNossaSenhoraTemplateContentSchema = contentPageSchema.extend({
  slug: z.literal('titulos-nossa-senhora-template'),
})

export const ministeriosTemplateContentSchema = contentPageSchema.extend({
  slug: z.literal('ministerios-template'),
})

export const galleryItemSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  path: z.string(),
  emoji: z.string().optional(),
  available: z.boolean().default(true),
})

export const titulosNossaSenhoraContentSchema = z.object({
  slug: z.literal('titulos-nossa-senhora'),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
  galleries: z.array(galleryItemSchema),
})

export const ministryItemSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  path: z.string(),
  emoji: z.string().optional(),
  available: z.boolean().default(true),
})

export const ministeriosContentSchema = z.object({
  slug: z.literal('ministerios'),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
  ministries: z.array(ministryItemSchema),
})

export const projectSchema = z.object({
  emoji: z.string(),
  title: z.string(),
  description: z.string(),
})

export const valueSchema = z.object({
  icon: z.enum(['heart', 'users', 'smile', 'cross']),
  title: z.string(),
  description: z.string(),
})

export const deaAjudaContentSchema = z.object({
  slug: z.literal('dea-ajuda'),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    title: z.string(),
    highlight: z.string(),
    subtitle: z.string(),
    tagline: z.string(),
    backgroundImage: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
  }),
  about: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    highlight: z.string().optional(),
  }),
  video: z.object({
    title: z.string(),
    titleHighlight: z.string(),
    description: z.string(),
    placeholder: z.string(),
  }),
  projects: z.object({
    title: z.string(),
    titleHighlight: z.string(),
    description: z.string(),
    items: z.array(projectSchema),
  }),
  inspiration: z.object({
    title: z.string(),
    titleHighlight: z.string(),
    backgroundImage: z.string(),
    paragraphs: z.array(z.string()),
  }),
  values: z.object({
    title: z.string(),
    titleHighlight: z.string(),
    items: z.array(valueSchema),
  }),
  quote: z.object({
    text: z.string(),
    author: z.string(),
  }),
})

export const checklistItemSchema = z.object({
  id: z.string(),
  description: z.string(),
  category: z.enum(['navigation', 'visual', 'content', 'footer']),
})

export const checklistSchema = z.object({
  version: z.string(),
  items: z.array(checklistItemSchema),
})

export type VersionSpec = z.infer<typeof versionSchema>
export type RoutesSpec = z.infer<typeof routesSchema>
export type ParagraphSection = z.infer<typeof paragraphSectionSchema>
export type CardSection = z.infer<typeof cardSectionSchema>
export type QuoteBlock = z.infer<typeof quoteBlockSchema>
export type ContentSection = z.infer<typeof contentSectionSchema>
export type ContentPage = z.infer<typeof contentPageSchema>
export type HomeContent = z.infer<typeof homeContentSchema>
export type TitulosNossaSenhoraContent = z.infer<typeof titulosNossaSenhoraContentSchema>
export type NossaSenhoraAuxiliadoraContent = z.infer<
  typeof nossaSenhoraAuxiliadoraContentSchema
>
export type NossaSenhoraMedjugorjeContent = z.infer<
  typeof nossaSenhoraMedjugorjeContentSchema
>
export type TitulosNossaSenhoraTemplateContent = z.infer<
  typeof titulosNossaSenhoraTemplateContentSchema
>
export type MinisteriosTemplateContent = z.infer<typeof ministeriosTemplateContentSchema>
export type MinisteriosContent = z.infer<typeof ministeriosContentSchema>
export type DeaAjudaContent = z.infer<typeof deaAjudaContentSchema>
export type ChecklistSpec = z.infer<typeof checklistSchema>

export type ContentSlug =
  | 'home'
  | 'titulos-nossa-senhora'
  | 'nossa-senhora-auxiliadora'
  | 'nossa-senhora-medjugorje'
  | 'titulos-nossa-senhora-template'
  | 'ministerios'
  | 'ministerios-template'
  | 'dea-ajuda'

const contentSchemas = {
  home: homeContentSchema,
  'titulos-nossa-senhora': titulosNossaSenhoraContentSchema,
  'nossa-senhora-auxiliadora': nossaSenhoraAuxiliadoraContentSchema,
  'nossa-senhora-medjugorje': nossaSenhoraMedjugorjeContentSchema,
  'titulos-nossa-senhora-template': titulosNossaSenhoraTemplateContentSchema,
  ministerios: ministeriosContentSchema,
  'ministerios-template': ministeriosTemplateContentSchema,
  'dea-ajuda': deaAjudaContentSchema,
} as const

export function getContentSchema(slug: ContentSlug) {
  return contentSchemas[slug]
}
