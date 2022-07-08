import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = React.forwardRef((props, ref) => {
	return (
		<>
			<div className={`${props.className} ${classes.checkbox_div}`}>
				<input
					type="checkbox"
					className={classes.checkbox}
					onClick={props.onClick}
					ref={ref}
				/>
				<span className={classes.checkbox_span}></span>
			</div>
		</>
	);
});

export default Checkbox;
