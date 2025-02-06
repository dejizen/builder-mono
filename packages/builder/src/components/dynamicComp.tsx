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

  return props.dejiComponent.props.enablePreview ? (
    <div
      data-kontent-item-id={props.dejiComponent.props.item.system.id}
      data-kontent-language-codename={
        props.dejiComponent.props.locale || 'default'
      }
    >
      <DynamicComponent
        {...{
          item: props.dejiComponent.props.item,
          extra: props.dejiComponent.props.extra,
        }}
      />
    </div>
  ) : (
    <DynamicComponent
      {...{
        item: props.dejiComponent.props.item,
        extra: props.dejiComponent.props.extra,
      }}
    />
  )
}
