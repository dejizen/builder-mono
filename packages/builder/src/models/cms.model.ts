import { CmsEnum } from './public.model'

export interface CmsLayout {
  cms: CmsEnum
  token: string
  slug: string
  env?: string
  locale?: string
  collection?: string
  pageType?: string
}
