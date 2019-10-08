import React, { forwardRef, useImperativeHandle } from "react";

const Audioz = forwardRef(({ path, letter, currentSound }, ref) => {
	useImperativeHandle(ref, () => ({
		playAudio(target) {
			new Audio(target).play();
		}
	}));

	return <audio ref={ref} src={path} className="clip" id={letter}></audio>;
});

export default Audioz;
