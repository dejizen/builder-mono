import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { DejiComponent } from "./render";

interface DynamicCompoProps {
  dejiComponent: DejiComponent<any>;
  customComponents: any;
}

export default function DynamicComp(props: DynamicCompoProps) {
  const DynamicComponent: ComponentType<any> = props.dejiComponent.props.path
    ? props.customComponents[props.dejiComponent.name]
    : dynamic(
        () => import(`./builderComps/deji${props.dejiComponent.name}`, {})
      );

  return <DynamicComponent {...props.dejiComponent.props} />;
}
