import { COMPONENTS } from "../components";
import Render, { DejiBuilder } from "./render";

export interface BuilderData {
  datoCmsToken: string;
  slug: string;
}

// export class DejiComponent<T> {
//   name: string;
//   props?: T;
//   // children?: DejiComponent<T>[];

//   constructor(data: DejiComponent<T>) {
//     this.name = data.name;
//     this.props = data.props;
//     // this.children = data.children;
//   }
// }

// export class DejiBuilder<T> {
//   components: DejiComponent<T>[];
//   isHorizontal?: boolean;

//   constructor(data: DejiBuilder<T>) {
//     this.components = data.components;
//     this.isHorizontal = data.isHorizontal || false;
//   }
// }

export default async function Builder(props: BuilderData) {
  // console.log("🚀 ~ Builder ~ props:", props);
  // if (!props.datoCmsToken || !props.slug) {
  //   throw new Error("Missing required props");
  // }

  // const resItemsType = await fetch(`https://site-api.datocms.com/item-types`, {
  //   headers: {
  //     cache: "no-store",
  //     Authorization: `Bearer ${props.datoCmsToken}`,
  //     Accept: "application/json",
  //     "X-Api-Version": "3",
  //   },
  // });
  // const itemsType = await resItemsType.json();

  // const resPage = await fetch(
  //   `https://site-api.datocms.com/items?filter[type]=page&filter[fields][slug][eq]=${props.slug}&nested=true`,
  //   {
  //     cache: "no-store",
  //     headers: {
  //       Authorization: `Bearer ${props.datoCmsToken}`,
  //       Accept: "application/json",
  //       "X-Api-Version": "3",
  //     },
  //   }
  // );
  // const pages = await resPage.json();
  // const page = pages.data[0];

  // const components = mapComponents(page.attributes.layout, itemsType.data);

  const dejiBuilder = new DejiBuilder<any>({ components: COMPONENTS });

  return <Render {...dejiBuilder} />;
}
