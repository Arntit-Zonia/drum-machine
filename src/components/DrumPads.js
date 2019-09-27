import React from "react";

const DrumPads = ({ handleClick }) => {
	return (
		<>
			<div className="top-container">
				<div
					onClick={handleClick}
					className=" drum-pad"
					id="bouncy-sound"
				>
					Q
					<audio
						src="../../sound-effects/bouncy-sound"
						className="clip"
						id="Q"
					></audio>
				</div>
				<div
					onClick={handleClick}
					className="drum-pad"
					id="mouse-click"
				>
					W
					<audio
						src="../../sound-effects/mouse-click"
						className="clip"
						id="W"
					></audio>
				</div>
				<div onClick={handleClick} className="drum-pad" id="crow">
					E
					<audio
						src="../../sound-effects/crow"
						className="clip"
						id="E"
					></audio>
				</div>
			</div>
			<div className="mid-container">
				<div onClick={handleClick} className="drum-pad" id="game-die">
					A
					<audio
						src="../../sound-effects/game-die"
						className="clip"
						id="A"
					></audio>
				</div>
				<div onClick={handleClick} className="drum-pad" id="jump">
					S
					<audio
						src="../../sound-effects/platform-jump"
						className="clip"
						id="S"
					></audio>
				</div>
				<div onClick={handleClick} className="drum-pad" id="mouth">
					D
					<audio
						src="../../sound-effects/pop-human-mouth-effect"
						className="clip"
						id="D"
					></audio>
				</div>
			</div>
			<div className="bottom-container">
				<div onClick={handleClick} className="drum-pad" id="schwubb">
					Z
					<audio
						src="../../sound-effects/schwubb-sound-effect"
						className="clip"
						id="Z"
					></audio>
				</div>
				<div onClick={handleClick} className="drum-pad" id="slap">
					X
					<audio
						src="../../sound-effects/slap-cartoony"
						className="clip"
						id="X"
					></audio>
				</div>
				<div onClick={handleClick} className="drum-pad" id="whip">
					C
					<audio
						src="../../sound-effects/whip-crack"
						className="clip"
						id="C"
					></audio>
				</div>
			</div>
		</>
	);
};

export default DrumPads;
