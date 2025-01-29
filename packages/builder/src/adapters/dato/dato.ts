/* eslint-disable */
import { CmsLayout, DejiComponent } from '../../models/cms.model'

export const mapComponents = async ({
  token,
  slug,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
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
    return !!iTypeFound
      ? item.attributes.childs && item.attributes.childs.length
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
    return item.attributes.childs && item.attributes.childs.length
      ? new DejiComponent<any>({
          name: `${
            item.attributes.api_key.charAt(0).toUpperCase() +
            item.attributes.api_key.slice(1)
          }`,
          props: {
            ...item.attributes,
            children: buildComponents(item.attributes.childs),
          },
        })
      : new DejiComponent<any>({
          name: `${
            item.attributes.api_key.charAt(0).toUpperCase() +
            item.attributes.api_key.slice(1)
          }`,
          props: { ...item.attributes },
        })
  })
}
