import type { CmsEnum } from '../models/public.model'
import { mapComponents } from './mapper'
import { DejiBuilder, Render } from './render'

export interface BuilderData {
  config: {
    token: string
    slug: string
    locale: string
    env?: string
    collection?: string
    pageType?: string
    customComponents: any
    clientConf: any
    cms: CmsEnum
    extra: any
    enablePreview?: boolean
  }
}

// locale?: string
// regId?: string
// cardtypeName?: string
// id?: string
// to?: any
export async function Builder({ config }: BuilderData) {
  // TODO: move this to every mapper file
  if (!config.token || !config.slug) {
    throw new Error('Missing required props')
  }

  const components = await mapComponents(config)

  const dejiBuilder = new DejiBuilder<any>({
    components,
    customComponents: config.customComponents,
  })

  return <Render {...dejiBuilder} />
}
