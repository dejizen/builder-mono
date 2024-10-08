import ChildBuilder from "../childBuilder";
import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiFooterData extends DejiCompBase {
  constructor(data: DejiFooterData) {
    super(data);
  }
}

export default function DejiFooter(props: DejiFooterData) {
  return (
    <footer>
      FOOTER
      <ChildBuilder {...props} />
    </footer>
  );
}
