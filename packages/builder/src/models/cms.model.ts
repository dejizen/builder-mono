import type { IDeliveryClientConfig } from '@kontent-ai/delivery-sdk'
import type { CmsEnum } from './public.model'

export interface KontentCmsLayout extends CmsLayout {
  clientConf: IDeliveryClientConfig
  env: string
  collection: string
  pageType: string
}

export interface DatoCmsLayout extends CmsLayout {
  token?: string
}

export interface CmsLayout {
  cms: CmsEnum
  slug: string
  locale: string
  extra: any
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
