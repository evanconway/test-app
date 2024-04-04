import { useEffect, useState } from "react";

const App = () => {
	const [randomNum, setRandomNum] = useState<number | null>(null);

	const getNewRandomNum = async () => {
		setRandomNum(null);
		setTimeout(() => {
			setRandomNum(Math.floor(Math.random() * 1000) + 1);
		}, 400);
	};

	useEffect(() => {
		getNewRandomNum();
	}, []);

	return <div>
		<h1>test app</h1>
		<div>{`Random Number: ${randomNum === null ? 'fetching...' : randomNum}`}</div>
		<button onClick={getNewRandomNum}>Get New Random Number</button>
	</div>;
};

export default App;
