import { ComponentType } from 'react'
import { DejiComponent } from '../models/cms.model'

interface DynamicCompoProps {
  dejiComponent: DejiComponent<any>
  customComponents: any
}

export function DynamicComp(props: DynamicCompoProps) {
  // TODO: USE ALSO DEFAULT COMPONENTS
  const DynamicComponent: ComponentType<any> = props.customComponents[
    props.dejiComponent.name
  ] ? (
    props.customComponents[props.dejiComponent.name]
  ) : (
    <></>
  )
  // dynamic(
  //     () => import(`./builderComps/deji${props.dejiComponent.name}`, {})
  //   )

  return (
    <DynamicComponent
      {...{
        item: props.dejiComponent.props.item,
        extra: props.dejiComponent.props.extra,
      }}
    />
  )
}
