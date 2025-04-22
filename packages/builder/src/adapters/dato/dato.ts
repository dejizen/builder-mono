import type { CmsLayout } from '../../models/cms.model'
import { DejiComponent } from '../../models/cms.model'

export const mapComponents = async ({
  token,
  slug,
}: CmsLayout): Promise<{ page: any; components: DejiComponent<any>[] }> => {
  const resItemsType = await fetch(`https://site-api.datocms.com/item-types`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'X-Api-Version': '3',
    },
  })
  const itemsType = await resItemsType.json()

  const resPage = await fetch(
    `https://site-api.datocms.com/items?filter[type]=page&filter[fields][slug][eq]=${slug}&nested=true`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'X-Api-Version': '3',
      },
    }
  )
  const pages = await resPage.json()
  const page = pages.data[0]

  return { page, components: build(page, itemsType) }
}

export const build = (page: any, itemsType: any) => {
  const datoCmsLayout = buildComponentsName(
    page.attributes.layout,
    itemsType.data
  )

  return buildComponents(datoCmsLayout)
}

const buildComponentsName = (
  datoCmsLayout: any[],
  datoCmsItemTypes: any[]
): any[] => {
  return datoCmsLayout.map((item: any) => {
    const iTypeFound = datoCmsItemTypes.find((iType: any) => {
      return iType.id === item.relationships.item_type.data.id
    })
    return iTypeFound
      ? item.attributes.childs?.length
        ? {
            ...item,
            attributes: {
              ...item.attributes,
              name: iTypeFound.attributes.name,
              api_key: iTypeFound.attributes.api_key,
              childs: buildComponentsName(
                item.attributes.childs,
                datoCmsItemTypes
              ),
            },
          }
        : {
            ...item,
            attributes: {
              ...item.attributes,
              name: iTypeFound.attributes.name,
              api_key: iTypeFound.attributes.api_key,
            },
          }
      : item
  })
}

const buildComponents = (layout: any[]): DejiComponent<any>[] => {
  return layout.map((item: any) => {
    //console.log("buildComponents item", item);
    return item.attributes.childs?.length
      ? new DejiComponent<any>({
          name: `${
            (item.attributes.api_key as string).charAt(0).toUpperCase() +
            (item.attributes.api_key as string).slice(1)
          }`,
          props: {
            ...item.attributes,
            children: buildComponents(item.attributes.childs),
          },
        })
      : new DejiComponent<any>({
          name: `${
            (item.attributes.api_key as string).charAt(0).toUpperCase() +
            (item.attributes.api_key as string).slice(1)
          }`,
          props: { ...item.attributes },
        })
  })
}
