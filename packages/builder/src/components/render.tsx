import type { DejiComponent } from '../models/cms.model'
import { DynamicComp } from './dynamic-comp'

export class DejiBuilder<T> {
  components: DejiComponent<T>[]
  customComponents: any[]
  isHorizontal?: boolean

  constructor(data: DejiBuilder<T>) {
    this.components = data.components
    this.customComponents = data.customComponents
    this.isHorizontal = data.isHorizontal || false
  }
}

export function Render(props: DejiBuilder<any>) {
  return (
    <div className={`${props.isHorizontal ? 'flex gap-2' : 'flex flex-col'}`}>
      {props.components.map((comp, index) => (
        <DynamicComp
          key={index}
          dejiComponent={comp}
          customComponents={props.customComponents}
        />
      ))}
    </div>
  )
}
