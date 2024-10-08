import ChildBuilder from "../childBuilder";
import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiSectionData extends DejiCompBase {
  constructor(data: DejiSectionData) {
    super(data);
  }
}

export default function DejiSection(props: DejiSectionData) {
  return (
    <section>
      SECTION
      <ChildBuilder {...props} />
    </section>
  );
}
