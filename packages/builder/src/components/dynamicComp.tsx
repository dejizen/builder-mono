import { ComponentType } from 'react'
import { DejiComponent } from './render'

interface DynamicCompoProps {
  dejiComponent: DejiComponent<any>
  customComponents: any
}

export default function DynamicComp(props: DynamicCompoProps) {
  console.log(
    '🚀 ~ DynamicComp ~ props.dejiComponent.props:',
    props.dejiComponent.name
  )

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
