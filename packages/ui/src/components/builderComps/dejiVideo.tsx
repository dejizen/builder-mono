import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

class DejiVideoSource {
  url: string;
  type: string;

  constructor(data: DejiVideoSource) {
    this.url = data.url;
    this.type = data.type;
  }
}

export class DejiVideoData extends DejiCompBase {
  source: DejiVideoSource[];

  constructor(data: DejiVideoData) {
    super(data);
    this.source = data.source;
  }
}

export default function DejiVideo(props: DejiVideoData) {
  return (
    <video controls>
      {props.source.map((s, index) => (
        <source src={s.url} type={s.type} key={index}></source>
      ))}
    </video>
  );
}
