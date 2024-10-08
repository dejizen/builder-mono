import { DejiComponent } from "../builder";

export class DejiCompBase {
  class?: string;
  children?: DejiComponent<any>[];
  isHorizontal?: boolean;

  constructor(data: DejiCompBase) {
    this.class = data.class || "";
    this.children = data.children;
    this.isHorizontal = data.isHorizontal || false;
  }
}
