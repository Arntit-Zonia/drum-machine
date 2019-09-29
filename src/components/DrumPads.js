import React from "react";

//sound-effects
import bounce from ".././sound-effects/bouncy-sound.mp3";
import click from ".././sound-effects/clean-mouse-click.mp3";
import crow from ".././sound-effects/crow-caw.mp3";
import gameDeath from ".././sound-effects/game-die.mp3";
import jump from ".././sound-effects/platform-jump.mp3";
import pop from ".././sound-effects/pop-human-mouth-effect.mp3";
import schwubb from ".././sound-effects/schwubb-sound-effect.mp3";
import slap from ".././sound-effects/slap-cartoony.mp3";
import whip from ".././sound-effects/whip-crack.mp3";

const soundEffects = [
	{ id: "Bounce", letter: "Q", keyCode: 81, path: bounce },
	{ id: "Click", letter: "W", keyCode: 87, path: click },
	{ id: "Crow", letter: "E", keyCode: 69, path: crow },
	{ id: "Game-Death", letter: "A", keyCode: 65, path: gameDeath },
	{ id: "Jump", letter: "S", keyCode: 83, path: jump },
	{ id: "Pop", letter: "D", keyCode: 68, path: pop },
	{ id: "Schwubb", letter: "Z", keyCode: 90, path: schwubb },
	{ id: "Slap", letter: "X", keyCode: 88, path: slap },
	{ id: "Whip", letter: "C", keyCode: 67, path: whip }
];

const playAudio = (audio) => {
	new Audio(audio).play();
};

const DrumPads = ({ handleClick }) => {
	const renderSoundEffects = () => {
		return soundEffects.map((sound) => {
			document.addEventListener("keydown", (e) => {
				if (e.keyCode === sound.keyCode) playAudio(sound.path);
			});
			return (
				<div
					onClick={(e) => {
						handleClick(e);
						playAudio(sound.path);
					}}
					className="drum-pads-container"
					key={sound.id}
				>
					<div className="drum-pad" id={sound.id}>
						<span>{sound.letter}</span>
						<audio
							src={sound.path}
							className="clip"
							id={sound.letter}
						></audio>
					</div>
				</div>
			);
		});
	};

	return <>{renderSoundEffects()}</>;
};

export default DrumPads;
