import * as dato from '../adapters/dato/dato'
import * as kontent from '../adapters/kontent/kontent'
import { CmsLayout } from '../models/cms.model'
import { DejiComponent } from './render'

export const mapComponents = async ({
  token,
  slug,
  cms,
  env,
  locale,
  collection,
  regId,
  pageType,
  cardtypeName,
  to,
  id,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  switch (cms) {
    case 'dato':
      return await dato.mapComponents({ token, slug, cms })
    case 'kontent':
      return await kontent.mapComponents({
        token,
        slug,
        cms,
        env,
        locale,
        collection,
        regId,
        pageType,
        cardtypeName,
        to,
        id,
      })
    default:
      throw new Error('No CMS found')
  }
}
