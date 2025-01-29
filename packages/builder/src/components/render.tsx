import { DejiComponent } from '../models/cms.model'
import { DynamicComp } from './dynamicComp'

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
        <div className='mb-4 border-[1px] border-red-500 ml-2 p-1' key={index}>
          <DynamicComp
            dejiComponent={comp}
            customComponents={props.customComponents}
          />
        </div>
      ))}
    </div>
  )
}
