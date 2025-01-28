/* eslint-disable */
import { createDeliveryClient } from '@kontent-ai/delivery-sdk'
import { DejiComponent } from '../../components/render'
import { CmsLayout } from '../../models/cms.model'

export const mapComponents = async ({
  token,
  env,
  locale,
  pageType,
  collection,
  slug,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  const kontentRestClient = createDeliveryClient({
    environmentId: env!,
    linkedItemsReferenceHandler: 'map',
  })

  const resPage = await kontentRestClient
    .items<any>()
    .depthParameter(99)
    .type(pageType!)
    .languageParameter(locale!)
    .collection(collection!)
    .equalsFilter('elements.slug', slug || 'home')
    .toPromise()

  const page = resPage.data.items[0]

  const datoCmsLayout = buildComponentsName(page.elements)
  return buildComponents(datoCmsLayout)
}

const buildComponentsName = (datoCmsLayout: any[]): any[] => {
  return datoCmsLayout.map((item: any) => {
    return item.linkedItems && item.linkedItems.length
      ? {
          ...item,
          elements: {
            ...item.elements,
            name: item.system.type.name,
            api_key: item.system.type.codename,
            childs: buildComponentsName(item.linkedItems),
          },
        }
      : {
          ...item,
          elements: {
            ...item.elements,
            name: item.system.type.name,
            api_key: item.system.type.codename,
          },
        }
  })
}

const buildComponents = (layout: any[]): DejiComponent<any>[] => {
  return layout.map((item: any) => {
    //console.log("buildComponents item", item);
    return item.elements.childs && item.elements.childs.length
      ? new DejiComponent<any>({
          name: `${
            item.elements.api_key.charAt(0).toUpperCase() +
            item.elements.api_key.slice(1)
          }`,
          props: {
            ...item.elements,
            children: buildComponents(item.elements.childs),
          },
        })
      : new DejiComponent<any>({
          name: `${
            item.elements.api_key.charAt(0).toUpperCase() +
            item.elements.api_key.slice(1)
          }`,
          props: { ...item.elements },
        })
  })
}
