import { HTMLAttributeAnchorTarget } from "react";
import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiLinkData extends DejiCompBase {
  text?: string;
  target?: HTMLAttributeAnchorTarget | undefined;

  constructor(data: DejiLinkData) {
    super(data);
    this.text = data.text;
    this.target = data.target;
  }
}

export default function DejiLink(props: any) {
  return <a target={props.target}>{props.text}</a>;
}
