import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiImgData extends DejiCompBase {
  imgUrl: string;
  altText?: string;

  constructor(data: DejiImgData) {
    super(data);
    this.imgUrl = data.imgUrl;
    this.altText = data.altText || "";
  }
}

export default function DejiImg(props: DejiImgData) {
  return <img src={props.altText} alt={props.altText} />;
}
