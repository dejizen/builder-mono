import ChildBuilder from "../childBuilder";
import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiMainData extends DejiCompBase {
  constructor(data: DejiMainData) {
    super(data);
  }
}

export default function DejiMain(props: DejiMainData) {
  return (
    <main>
      MAIN
      <ChildBuilder {...props} />
    </main>
  );
}
