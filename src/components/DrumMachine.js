import React, { useState } from "react";
import "../drum-machine.css";
import Display from "./Display";
import DrumPads from "./DrumPads";

const DrumMachine = () => {
	const [displayVal, setDisplayVal] = useState("");

	const handleClick = (e) => {
		setDisplayVal(e.target.id);
	};

	return (
		<div id="drum-machine">
			<DrumPads handleClick={handleClick} />
			<Display displayVal={displayVal} />
		</div>
	);
};

export default DrumMachine;
