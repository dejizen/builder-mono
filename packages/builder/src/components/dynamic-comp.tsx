import type { ComponentType } from 'react'
import type { DejiComponent } from '../models/cms.model'

interface DynamicCompoProps {
  dejiComponent: DejiComponent<any>
  customComponents: any
}

export function DynamicComp(props: DynamicCompoProps) {
  // TODO: USE ALSO DEFAULT COMPONENTS
  const DynamicComponent: ComponentType<any> = props.customComponents[
    props.dejiComponent.name
  ]
    ? props.customComponents[props.dejiComponent.name]
    : null

  if (!DynamicComponent) {
    console.log('component not found', props.dejiComponent.name)
    return null
  }

  try {
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
  } catch (e) {
    console.log(
      'component not found',
      props.customComponents[props.dejiComponent.name]
    )
    console.error(e)
    return <></>
  }
}
