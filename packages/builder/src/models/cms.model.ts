import { CmsEnum } from './public.model'

export interface CmsLayout {
  cms: CmsEnum
  token: string
  slug: string
  env?: string
  locale?: string
  collection?: string
  pageType?: string
  regId?: string
  id?: string
  cardtypeName?: string
  to?: any
}

export class DejiComponent<T> {
  name: string
  props?: T
  // children?: DejiComponent<T>[];

  constructor(data: DejiComponent<T>) {
    this.name = data.name
    this.props = data.props
    // this.children = data.children;
  }
}
