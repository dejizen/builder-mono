import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiIFrameData extends DejiCompBase {
  src: string;
  title?: string;

  constructor(data: DejiIFrameData) {
    super(data);
    this.src = data.src;
    this.title = data.title || "";
  }
}

export default function DejiIFrame(props: DejiIFrameData) {
  return (
    <iframe
      src={props.src}
      title={props.title}
      width="100%"
      style={{ height: "100vh" }}
    >
      IFRAME
    </iframe>
  );
}
