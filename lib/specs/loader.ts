import fs from 'fs'
import path from 'path'
import { z } from 'zod'
import {
  checklistSchema,
  deaAjudaContentSchema,
  homeContentSchema,
  imagensContentSchema,
  imagensTemplateContentSchema,
  ministeriosContentSchema,
  ministeriosTemplateContentSchema,
  nossaSenhoraAuxiliadoraContentSchema,
  routesSchema,
  versionSchema,
  type ChecklistSpec,
  type ContentSlug,
  type DeaAjudaContent,
  type HomeContent,
  type ImagensContent,
  type ImagensTemplateContent,
  type MinisteriosContent,
  type MinisteriosTemplateContent,
  type NossaSenhoraAuxiliadoraContent,
  type RoutesSpec,
  type VersionSpec,
} from './types'

const SPECS_DIR = path.join(process.cwd(), 'specs')

function readJsonFile<T>(relativePath: string, schema: z.ZodType<T>): T {
  const filePath = path.join(SPECS_DIR, relativePath)
  const raw = fs.readFileSync(filePath, 'utf-8')
  return schema.parse(JSON.parse(raw))
}

export function loadVersion(): VersionSpec {
  return readJsonFile('version.json', versionSchema)
}

export function loadRoutes(): RoutesSpec {
  return readJsonFile('routes.json', routesSchema)
}

export function loadChecklist(): ChecklistSpec {
  return readJsonFile('tests/checklist.json', checklistSchema)
}

type ContentMap = {
  home: HomeContent
  imagens: ImagensContent
  'nossa-senhora-auxiliadora': NossaSenhoraAuxiliadoraContent
  'imagens-template': ImagensTemplateContent
  ministerios: MinisteriosContent
  'ministerios-template': MinisteriosTemplateContent
  'dea-ajuda': DeaAjudaContent
}

export function loadContent<S extends ContentSlug>(slug: S): ContentMap[S] {
  switch (slug) {
    case 'home':
      return readJsonFile('content/home.json', homeContentSchema) as ContentMap[S]
    case 'imagens':
      return readJsonFile('content/imagens.json', imagensContentSchema) as ContentMap[S]
    case 'nossa-senhora-auxiliadora':
      return readJsonFile(
        'content/nossa-senhora-auxiliadora.json',
        nossaSenhoraAuxiliadoraContentSchema,
      ) as ContentMap[S]
    case 'imagens-template':
      return readJsonFile(
        'content/imagens-template.json',
        imagensTemplateContentSchema,
      ) as ContentMap[S]
    case 'ministerios':
      return readJsonFile(
        'content/ministerios.json',
        ministeriosContentSchema,
      ) as ContentMap[S]
    case 'ministerios-template':
      return readJsonFile(
        'content/ministerios-template.json',
        ministeriosTemplateContentSchema,
      ) as ContentMap[S]
    case 'dea-ajuda':
      return readJsonFile('content/dea-ajuda.json', deaAjudaContentSchema) as ContentMap[S]
    default: {
      const _exhaustive: never = slug
      throw new Error(`Conteúdo não encontrado: ${_exhaustive}`)
    }
  }
}

export function validateAllSpecs(): void {
  loadVersion()
  loadRoutes()
  loadChecklist()
  ;(
    [
      'home',
      'imagens',
      'nossa-senhora-auxiliadora',
      'imagens-template',
      'ministerios',
      'ministerios-template',
      'dea-ajuda',
    ] as const
  ).forEach((slug) => {
    loadContent(slug)
  })
}
