import { useEffect, useState } from "react";

const App = () => {
	const [randomNum, setRandomNum] = useState<number | null>(null);
	const [title, setTitle] = useState('App Title');

	const getNewRandomNum = async () => {
		setRandomNum(null);
		const data = await (await fetch('/app/randomnumber')).json();
		setRandomNum(data.randomNumber);
	};

	useEffect(() => {
		getNewRandomNum();
		const getTitle = async () => {
			const data = await (await fetch('/app/title')).json();
			const newTitle = data.title !== undefined ? data.title : 'Untitled';
			setTitle(newTitle);
			document.getElementsByTagName('title')[0].innerHTML = newTitle;
		};
		getTitle();
	}, []);

	return <div>
		<h1>{title}</h1>
		<div>{`Random Number: ${randomNum === null ? 'fetching...' : randomNum}`}</div>
		<button onClick={getNewRandomNum}>Get New Random Number</button>
	</div>;
};

export default App;
