import * as dato from '../adapters/dato/dato'
import * as kontent from '../adapters/kontent/kontent'
import { CmsLayout, DejiComponent } from '../models/cms.model'

export const mapComponents = async ({
  token,
  slug,
  cms,
  env,
  locale,
  collection,
  pageType,
  clientConf,
  extra,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  switch (cms) {
    case 'dato':
      return await dato.mapComponents({
        token,
        slug,
        cms,
        extra,
        locale,
        clientConf,
      })
    case 'kontent':
      return await kontent.mapComponents({
        slug,
        cms,
        locale,
        collection,
        pageType,
        extra,
        clientConf,
      })
    default:
      throw new Error('No CMS found')
  }
}
