import { CmsEnum } from "../models/public.model";
import { mapComponents } from "./mapper";
import Render, { DejiBuilder } from "./render";

export interface BuilderData {
  token: string;
  slug: string;
  customComponents: any;
  cms: CmsEnum;
}

export default async function Builder(props: BuilderData) {
  if (!props.cms || !props.token || !props.slug) {
    throw new Error("Missing required props");
  }

  const components = await mapComponents(props);

  const dejiBuilder = new DejiBuilder<any>({
    components,
    customComponents: props.customComponents,
  });

  return <Render {...dejiBuilder} />;
}
