import * as dato from "../adapters/dato/dato";
import { CmsLayout } from "../models/cms.model";
import { DejiComponent } from "./render";

export const mapComponents = async ({
  token,
  slug,
  cms,
}: CmsLayout): Promise<DejiComponent<any>[]> => {
  switch (cms) {
    case "dato":
      return await dato.mapComponents({ token, slug, cms });
    default:
      throw new Error("No CMS found");
  }
};
