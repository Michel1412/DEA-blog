import fs from 'fs'
import path from 'path'
import { z } from 'zod'
import {
  checklistSchema,
  deaAjudaContentSchema,
  homeContentSchema,
  ministeriosContentSchema,
  ministeriosTemplateContentSchema,
  nossaSenhoraAparecidaContentSchema,
  nossaSenhoraAuxiliadoraContentSchema,
  nossaSenhoraLaSaletteContentSchema,
  nossaSenhoraGuadalupeContentSchema,
  nossaSenhoraDasGracasContentSchema,
  nossaSenhoraDaComunicacaoContentSchema,
  nossaSenhoraDasDoresContentSchema,
  nossaSenhoraDeFatimaContentSchema,
  nossaSenhoraLourdesContentSchema,
  nossaSenhoraMedjugorjeContentSchema,
  perseverancaContentSchema,
  routesSchema,
  titulosNossaSenhoraContentSchema,
  titulosNossaSenhoraTemplateContentSchema,
  versionSchema,
  type ChecklistSpec,
  type ContentSlug,
  type DeaAjudaContent,
  type HomeContent,
  type MinisteriosContent,
  type MinisteriosTemplateContent,
  type NossaSenhoraAparecidaContent,
  type NossaSenhoraAuxiliadoraContent,
  type NossaSenhoraLaSaletteContent,
  type NossaSenhoraGuadalupeContent,
  type NossaSenhoraDasGracasContent,
  type NossaSenhoraDaComunicacaoContent,
  type NossaSenhoraDasDoresContent,
  type NossaSenhoraDeFatimaContent,
  type NossaSenhoraLourdesContent,
  type NossaSenhoraMedjugorjeContent,
  type PerseverancaContent,
  type RoutesSpec,
  type TitulosNossaSenhoraContent,
  type TitulosNossaSenhoraTemplateContent,
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
  'titulos-nossa-senhora': TitulosNossaSenhoraContent
  'nossa-senhora-auxiliadora': NossaSenhoraAuxiliadoraContent
  'nossa-senhora-medjugorje': NossaSenhoraMedjugorjeContent
  'nossa-senhora-aparecida': NossaSenhoraAparecidaContent
  'nossa-senhora-la-salette': NossaSenhoraLaSaletteContent
  'nossa-senhora-lourdes': NossaSenhoraLourdesContent
  'nossa-senhora-guadalupe': NossaSenhoraGuadalupeContent
  'nossa-senhora-das-gracas': NossaSenhoraDasGracasContent
  'nossa-senhora-da-comunicacao': NossaSenhoraDaComunicacaoContent
  'nossa-senhora-das-dores': NossaSenhoraDasDoresContent
  'nossa-senhora-de-fatima': NossaSenhoraDeFatimaContent
  'titulos-nossa-senhora-template': TitulosNossaSenhoraTemplateContent
  ministerios: MinisteriosContent
  perseveranca: PerseverancaContent
  'ministerios-template': MinisteriosTemplateContent
  'dea-ajuda': DeaAjudaContent
}

export function loadContent<S extends ContentSlug>(slug: S): ContentMap[S] {
  switch (slug) {
    case 'home':
      return readJsonFile('content/home.json', homeContentSchema) as ContentMap[S]
    case 'titulos-nossa-senhora':
      return readJsonFile(
        'content/titulos-nossa-senhora.json',
        titulosNossaSenhoraContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-auxiliadora':
      return readJsonFile(
        'content/nossa-senhora-auxiliadora.json',
        nossaSenhoraAuxiliadoraContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-medjugorje':
      return readJsonFile(
        'content/nossa-senhora-medjugorje.json',
        nossaSenhoraMedjugorjeContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-aparecida':
      return readJsonFile(
        'content/nossa-senhora-aparecida.json',
        nossaSenhoraAparecidaContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-la-salette':
      return readJsonFile(
        'content/nossa-senhora-la-salette.json',
        nossaSenhoraLaSaletteContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-lourdes':
      return readJsonFile(
        'content/nossa-senhora-lourdes.json',
        nossaSenhoraLourdesContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-guadalupe':
      return readJsonFile(
        'content/nossa-senhora-guadalupe.json',
        nossaSenhoraGuadalupeContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-das-gracas':
      return readJsonFile(
        'content/nossa-senhora-das-gracas.json',
        nossaSenhoraDasGracasContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-da-comunicacao':
      return readJsonFile(
        'content/nossa-senhora-da-comunicacao.json',
        nossaSenhoraDaComunicacaoContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-das-dores':
      return readJsonFile(
        'content/nossa-senhora-das-dores.json',
        nossaSenhoraDasDoresContentSchema,
      ) as ContentMap[S]
    case 'nossa-senhora-de-fatima':
      return readJsonFile(
        'content/nossa-senhora-de-fatima.json',
        nossaSenhoraDeFatimaContentSchema,
      ) as ContentMap[S]
    case 'titulos-nossa-senhora-template':
      return readJsonFile(
        'content/titulos-nossa-senhora-template.json',
        titulosNossaSenhoraTemplateContentSchema,
      ) as ContentMap[S]
    case 'ministerios':
      return readJsonFile(
        'content/ministerios.json',
        ministeriosContentSchema,
      ) as ContentMap[S]
    case 'perseveranca':
      return readJsonFile('content/perseveranca.json', perseverancaContentSchema) as ContentMap[S]
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
      'titulos-nossa-senhora',
      'nossa-senhora-auxiliadora',
      'nossa-senhora-medjugorje',
      'nossa-senhora-aparecida',
      'nossa-senhora-la-salette',
      'nossa-senhora-lourdes',
      'nossa-senhora-guadalupe',
      'nossa-senhora-das-gracas',
      'nossa-senhora-da-comunicacao',
      'nossa-senhora-das-dores',
      'nossa-senhora-de-fatima',
      'titulos-nossa-senhora-template',
      'ministerios',
      'perseveranca',
      'ministerios-template',
      'dea-ajuda',
    ] as const
  ).forEach((slug) => {
    loadContent(slug)
  })
}
