import { useRef } from "react";
import Checkbox from "../UI/Checkbox";
const Item = (props) => {
  const doneCheckboxRef = useRef();
  const doneCheckboxHandler = (e) => {
    console.log(doneCheckboxRef.current.checked);
  };

  const delBtnHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ul>
        <li className="flex justify-between border-b pb-2">
          <div className="flex gap-4">
            <Checkbox ref={doneCheckboxRef} classes="hover:bg-slate-400 hover:border-slate-400" onClick={doneCheckboxHandler} />
            <p>{props.title}</p>
          </div>
          <button className="hover:text-red-400" onClick={delBtnHandler}>
            ✕
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Item;
