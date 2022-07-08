import { useRef, useState } from "react";
import Checkbox from "../../UI/Checkbox/Checkbox";
const Item = (props) => {
	const [isDone, setIsDone] = useState(props.done);
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
						<Checkbox
							ref={doneCheckboxRef}
							className="border border-neutral-200"
							onClick={doneCheckboxHandler}
						/>
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
