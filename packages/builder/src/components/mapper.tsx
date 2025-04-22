import * as dato from '../adapters/dato/dato'
import * as kontent from '../adapters/kontent/kontent'
import type {
  DatoCmsLayout,
  DejiComponent,
  KontentCmsLayout,
} from '../models/cms.model'
import { CmsEnum } from '../models/public.model'

export const mapComponents = async (
  config: KontentCmsLayout | DatoCmsLayout
): Promise<{ page: any; components: DejiComponent<any>[] }> => {
  switch (config.cms) {
    case CmsEnum.DATO:
      return dato.mapComponents(config as DatoCmsLayout)
    case CmsEnum.KONTENT:
      return kontent.mapComponents(config as KontentCmsLayout)
    default:
      throw new Error('No CMS found')
  }
}

export const buildComponents = ({
  config,
  page,
  extra,
  locale,
  inputTypes,
  enablePreview,
}: {
  config: KontentCmsLayout | DatoCmsLayout
  page: any
  extra: any
  locale: string
  inputTypes: any
  enablePreview?: boolean
}): DejiComponent<any>[] => {
  switch (config.cms) {
    case CmsEnum.DATO:
      return dato.build(page, inputTypes)
    case CmsEnum.KONTENT:
      return kontent.build(page, extra, locale, enablePreview)
    default:
      throw new Error('No CMS found')
  }
}
