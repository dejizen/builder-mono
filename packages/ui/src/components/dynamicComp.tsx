import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { DejiComponent } from "./builder";

export default function DynamicComp(props: DejiComponent<any>) {
  const DynamicComponent: ComponentType<any> = dynamic(
    () => import(`./builderComps/${props.name}`, {})
  );

  return <DynamicComponent {...props.props} />;
}
