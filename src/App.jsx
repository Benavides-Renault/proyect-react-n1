import { useState } from 'react';
import phrases from './phrases.json';
import { randomItems } from './utils';
import PhraseCard from './components/PhraseCard'
import Button from './components/Button'
import { img1_bg, img2_bg, img3_bg, img4_bg } from './assets/img';


const imgs_bg = [img1_bg, img2_bg, img3_bg, img4_bg]

function App() {
	const [phrase, setPhrases] = useState(randomItems(phrases));
	const [img_bg, setImg_bg] = useState(randomItems(imgs_bg))

	const changePhrase = () => {
		setPhrases(randomItems(phrases))
		setImg_bg(randomItems(imgs_bg))
	}

	return (
		<div className='container' style={{backgroundImage: `url('${img_bg}')`}}>
		
			<h1>Galleta de la Fortuna</h1>
			
			<PhraseCard
				phrase={phrase.phrase}
				author={phrase.author}
			/>
			
			<article className="outer-box">
				<Button className="inner-box" handlePhrase={changePhrase}>
					Prueba tu fortuna
				</Button>
			</article> 
		
		</div>
	);
}

export default App;
