import { DejiComponent } from "./render";

export const mapComponents = (
  datoCmsLayout: any[],
  datoCmsItemTypes: any[]
): DejiComponent<any>[] => {
  datoCmsLayout = buildComponentsName(datoCmsLayout, datoCmsItemTypes);

  return buildComponents(datoCmsLayout);
};

const buildComponentsName = (
  datoCmsLayout: any[],
  datoCmsItemTypes: any[]
): any[] => {
  return datoCmsLayout.map((item: any) => {
    const iTypeFound = datoCmsItemTypes.find(
      (iType: any) => iType.id === item.relationships.item_type.data.id
    );
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
      : item;
  });
};

const buildComponents = (layout: any[]): DejiComponent<any>[] => {
  return layout.map((item: any) => {
    return item.attributes.childs && item.attributes.childs.length
      ? new DejiComponent<any>({
          name: `deji${
            item.attributes.api_key.charAt(0).toUpperCase() +
            item.attributes.api_key.slice(1)
          }`,
          props: {
            ...item.attributes,
            children: buildComponents(item.attributes.childs),
          },
        })
      : new DejiComponent<any>({
          name: `deji${
            item.attributes.api_key.charAt(0).toUpperCase() +
            item.attributes.api_key.slice(1)
          }`,
          props: { ...item.attributes },
        });
  });
};
