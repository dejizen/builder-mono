import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiIconDate extends DejiCompBase {
  iconName: string;

  constructor(data: DejiIconDate) {
    super(data);
    this.iconName = data.iconName;
  }
}

export default function DejiVideo(props: DejiIconDate) {
  return <i className={"dj-icon-" + props.iconName}></i>;
}
