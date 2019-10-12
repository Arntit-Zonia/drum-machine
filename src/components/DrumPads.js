import React, { useEffect } from "react";
import Audio from "./Audio";

const soundEffects = [
	{
		id: "Heater-1",
		letter: "Q",
		keyCode: 81,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
	},
	{
		id: "Heater-2",
		letter: "W",
		keyCode: 87,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
	},
	{
		id: "Heater-3",
		letter: "E",
		keyCode: 69,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
	},
	{
		id: "Heater-4",
		letter: "A",
		keyCode: 65,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
	},
	{
		id: "Clap",
		letter: "S",
		keyCode: 83,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
	},
	{
		id: "Drums",
		letter: "D",
		keyCode: 68,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
	},
	{
		id: "Kick-n-Hat",
		letter: "Z",
		keyCode: 90,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
	},
	{
		id: "Kick",
		letter: "X",
		keyCode: 88,
		path: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
	},
	{
		id: "Cev",
		letter: "C",
		keyCode: 67,
		path: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
	}
];

const DrumPads = ({ handleClick }) => {
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			const audio = document.getElementById(e.key.toLocaleUpperCase());
			// checks if a valid key is pressed && plays the specified audio
			if (audio) audio.play();
		});
	}, []);

	const renderSoundEffects = () => {
		return soundEffects.map((sound) => {
			return (
				<div
					className="drum-pad"
					key={sound.id}
					id={sound.id}
					onClick={(e) => {
						handleClick(e);
						const audio = document.getElementById(e.target.id)
							.childNodes[1];
						audio.play();
					}}
				>
					{sound.letter}
					<Audio letter={sound.letter} path={sound.path} />
				</div>
			);
		});
	};

	return <>{renderSoundEffects()}</>;
};

export default DrumPads;
