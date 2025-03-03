import type { DejiComponent } from '../models/cms.model'
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
  components?: DejiComponent<any>[]
}

// locale?: string
// regId?: string
// cardtypeName?: string
// id?: string
// to?: any
export async function Builder({ config, components }: BuilderData) {
  // TODO: move this to every mapper file
  if (!config.token || !config.slug) {
    throw new Error('Missing required props')
  }

  const comps = components
    ? components
    : (await mapComponents(config)).components

  const dejiBuilder = new DejiBuilder<any>({
    components: comps,
    customComponents: config.customComponents,
  })

  return <Render {...dejiBuilder} />
}
