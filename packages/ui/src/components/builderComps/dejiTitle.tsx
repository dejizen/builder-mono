import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiTitleData extends DejiCompBase {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;

  constructor(data: DejiTitleData) {
    super(data);
    this.tag = data.tag;
    this.text = data.text;
  }
}

export default function DejiTitle(props: any) {
  // TODO: capire come non usare dangerouslySetInnerHTML ma renderizzare direttamente il tag html
  const rawHtml = `<${props.tag} class="${props.class || ""}">${props.text}</${
    props.tag
  }>`;

  return <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>;
}
