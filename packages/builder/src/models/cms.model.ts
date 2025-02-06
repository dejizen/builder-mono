import { CmsEnum } from './public.model'

export interface CmsLayout {
  cms: CmsEnum
  token?: string
  slug: string
  locale: string
  env?: string
  collection?: string
  pageType?: string
  extra: any
  clientConf: any
  enablePreview?: boolean
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
