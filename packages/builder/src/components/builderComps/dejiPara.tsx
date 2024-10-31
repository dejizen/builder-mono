import ChildBuilder from "../childBuilder"
import { DejiCompBase } from "../interfaces/deji-comp-base.interface"

export class DejiParaData extends DejiCompBase {
  text?: string | null

  constructor(data: DejiParaData) {
    super(data);

    this.text = data.text || null;
  }
}

export default function DejiPara(props: DejiParaData) {
  return (
    <p>
      {props.text}
      <ChildBuilder {...props} />
    </p>
  );
}
