import { CmsEnum } from "./public.model";

export interface CmsLayout {
  cms: CmsEnum;
  token: string;
  slug: string;
}
