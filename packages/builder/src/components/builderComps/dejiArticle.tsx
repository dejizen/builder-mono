import ChildBuilder from "../childBuilder";
import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiArticleData extends DejiCompBase {
  constructor(data: DejiArticleData) {
    super(data);
  }
}

export default function DejiArticle(props: DejiArticleData) {
  return (
    <article>
      ARTICLE
      <ChildBuilder {...props} />
    </article>
  );
}
