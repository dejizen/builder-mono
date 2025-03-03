import { createDeliveryClient } from '@kontent-ai/delivery-sdk'
import type { KontentCmsLayout } from '../../models/cms.model'
import { DejiComponent } from '../../models/cms.model'

export const mapComponents = async ({
  locale,
  pageType,
  collection,
  slug,
  extra,
  clientConf,
  enablePreview,
}: KontentCmsLayout): Promise<{
  page: any
  components: DejiComponent<any>[]
}> => {
  const kontentRestClient = createDeliveryClient(clientConf)

  const resPage = await kontentRestClient
    .items<any>()
    .depthParameter(99)
    .type(pageType)
    .languageParameter(locale)
    .collection(collection)
    .equalsFilter('elements.slug', slug || 'home')
    .toPromise()

  const page = resPage.data.items[0]

  const kontentCmsLayout = buildComponentsName(
    page.elements.content.linkedItems
  )
  return {
    page,
    components: buildComponents(kontentCmsLayout, extra, locale, enablePreview),
  }
}

const buildComponentsName = (kontentCmsLayout: any[]): any[] => {
  return kontentCmsLayout.map((item: any) => {
    return item.linkedItems?.length
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

const buildComponents = (
  layout: any[],
  extra: any,
  locale: string,
  enablePreview?: boolean
): DejiComponent<any>[] => {
  return layout.map((item: any) => {
    const name = (item.elements.api_key as string)
      .split('_')
      .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
      .join('')

    return item.elements.childs?.length
      ? new DejiComponent<any>({
          name,
          props: {
            elements: {
              item: {
                ...item.elements,
              },
              system: {
                ...item.system,
              },
            },
            enablePreview,
            locale,
            extra,
            children: buildComponents(
              item.elements.childs,
              extra,
              locale,
              enablePreview
            ),
          },
        })
      : new DejiComponent<any>({
          name,
          props: {
            item: {
              elements: {
                ...item.elements,
              },
              system: {
                ...item.system,
              },
            },
            enablePreview,
            locale,
            extra,
          },
        })
  })
}
