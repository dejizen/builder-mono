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
  extra,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  switch (cms) {
    case 'dato':
      return await dato.mapComponents({ token, slug, cms, extra, locale })
    case 'kontent':
      return await kontent.mapComponents({
        token,
        slug,
        cms,
        env,
        locale,
        collection,
        pageType,
        extra,
      })
    default:
      throw new Error('No CMS found')
  }
}
