import React from "react";

const Audio = ({ path, letter }) => {
	return <audio src={path} className="clip" id={letter}></audio>;
};

export default Audio;
