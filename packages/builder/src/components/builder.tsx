import { CmsEnum } from '../models/public.model'
import { mapComponents } from './mapper'
import { DejiBuilder, Render } from './render'

export interface BuilderData {
  config: {
    token: string
    slug: string
    env?: string
    locale?: string
    collection?: string
    regId?: string
    pageType?: string
    cardtypeName?: string
    id?: string
    to?: any
    customComponents: any
    cms: CmsEnum
  }
}

export async function Builder({ config }: BuilderData) {
  if (!config.cms || !config.token || !config.slug) {
    throw new Error('Missing required props')
  }

  const components = await mapComponents(config)

  const dejiBuilder = new DejiBuilder<any>({
    components,
    customComponents: config.customComponents,
  })

  return <Render {...dejiBuilder} />
}
