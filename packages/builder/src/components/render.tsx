import DynamicComp from "./dynamicComp";

export class DejiComponent<T> {
  name: string;
  props?: T;
  // children?: DejiComponent<T>[];

  constructor(data: DejiComponent<T>) {
    this.name = data.name;
    this.props = data.props;
    // this.children = data.children;
  }
}

export class DejiBuilder<T> {
  components: DejiComponent<T>[];
  isHorizontal?: boolean;

  constructor(data: DejiBuilder<T>) {
    this.components = data.components;
    this.isHorizontal = data.isHorizontal || false;
  }
}

export default function Render(props: DejiBuilder<any>) {
  return (
    <div className={`${props.isHorizontal ? "flex gap-2" : "flex flex-col"}`}>
      {props.components.map((comp, index) => (
        <div className="mb-4 border-[1px] border-red-500 ml-2 p-1" key={index}>
          <DynamicComp {...comp} />
        </div>
      ))}
    </div>
  );
}
