import { DejiCompBase } from "../interfaces/deji-comp-base.interface";

export class DejiButtonData extends DejiCompBase {
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "lg" | "md" | "sm" | "full-width";

  constructor(data: DejiButtonData) {
    super(data);
    this.label = data.label;
    this.type = data.type || "button";
    this.size = data.size || "sm";
  }
}

export default function DejiButton(props: DejiButtonData) {
  const classCss = `dj-button ${props.size} ${props.class || ""}`;

  const a = new DejiButtonData({ label: "test" });

  return (
    <button type={props.type} className={classCss}>
      {props.label}
    </button>
  );
}
