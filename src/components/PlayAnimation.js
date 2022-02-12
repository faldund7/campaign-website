import "../css/playAnimation.scss";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { TADUM_SOUND_URL } from "../../requests";

const PlayAnimation = () => {

    const TADUM_SOUND_URL = "https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_TaDum.mp3";

	let navigate = useNavigate();
	const soundRef = useRef(null);
	const handleTadum = () => {
		soundRef.current.currentTime = 0;
		soundRef.current.play();
	}

	useEffect(() => {
		handleTadum();
		setTimeout(() => {
			navigate('/', { replace: true });
		}, 4200)
	}, [navigate])

	return (
		<div className='PlayAnimation__wrp'>
			<audio ref={soundRef} src={TADUM_SOUND_URL} />
			<span className="PlayAnimation__text">
				FIRST AND LAST NAME
			</span>
		</div>
	)
}

export default PlayAnimation