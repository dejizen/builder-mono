/* eslint-disable */
import { createDeliveryClient } from '@kontent-ai/delivery-sdk'
import { CmsLayout, DejiComponent } from '../../models/cms.model'

export const mapComponents = async ({
  locale,
  pageType,
  collection,
  slug,
  extra,
  clientConf,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  const kontentRestClient = createDeliveryClient(clientConf)

  const resPage = await kontentRestClient
    .items<any>()
    .depthParameter(99)
    .type(pageType!)
    .languageParameter(locale!)
    .collection(collection!)
    .equalsFilter('elements.slug', slug || 'home')
    .toPromise()

  const page = resPage.data.items[0]

  const kontentCmsLayout = buildComponentsName(
    page.elements.content.linkedItems
  )
  return buildComponents(kontentCmsLayout, extra)
}

const buildComponentsName = (kontentCmsLayout: any[]): any[] => {
  return kontentCmsLayout.map((item: any) => {
    return item.linkedItems && item.linkedItems.length
      ? {
          ...item,
          elements: {
            ...item.elements,
            name: item.system.name,
            api_key: item.system.type,
            childs: buildComponentsName(item.linkedItems),
          },
        }
      : {
          ...item,
          elements: {
            ...item.elements,
            name: item.system.name,
            api_key: item.system.type,
          },
        }
  })
}

const buildComponents = (layout: any[], extra: any): DejiComponent<any>[] => {
  return layout.map((item: any) => {
    const name = item.elements.api_key
      .split('_')
      .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
      .join('')

    return item.elements.childs && item.elements.childs.length
      ? new DejiComponent<any>({
          name: name,
          props: {
            elements: {
              item: {
                ...item.elements,
              },
              system: {
                ...item.system,
              },
            },
            extra,
            children: buildComponents(item.elements.childs, extra),
          },
        })
      : new DejiComponent<any>({
          name: name,
          props: {
            item: {
              elements: {
                ...item.elements,
              },
              system: {
                ...item.system,
              },
            },
            extra,
          },
        })
  })
}
