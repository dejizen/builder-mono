import { DejiCompBase } from "./interfaces/deji-comp-base.interface";
import Render from "./render";

export default function ChildBuilder(props: DejiCompBase) {
  return (
    <>
      {props.children && props.children.length > 0 && (
        <div className="mt-4">
          <Render
            components={props.children}
            isHorizontal={props.isHorizontal}
          />
        </div>
      )}
    </>
  );
}
