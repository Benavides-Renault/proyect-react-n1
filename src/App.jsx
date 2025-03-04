import { useState } from 'react';
import phrases from './phrases.json';
import { randomItems } from './utils';
import PhraseCard from './components/PhraseCard'
import Button from './components/Button';
import { img1_bg, img2_bg, img3_bg, img4_bg } from './assets/img';
import FlipContainer from './components/FlipContainer';

const imgs_bg = [img1_bg, img2_bg, img3_bg, img4_bg]

function App() {
	const [phrase, setPhrases] = useState(randomItems(phrases));
	const [img_bg, setImg_bg] = useState(randomItems(imgs_bg))
	const [flip, setFlip] = useState(false);

	const changePhrase = () => {
		setFlip(true);
    setTimeout(() => {
      setPhrases(randomItems(phrases));
      setImg_bg(randomItems(imgs_bg));
    }, 0);
    setTimeout(() => setFlip(false), 250);
  };

	return (
		<FlipContainer flip={flip}>
			<div className='container' style={{backgroundImage: `url('${img_bg}')`}}>
					<h1>Galleta de la Fortuna</h1>
					
					<PhraseCard
						phrase={phrase.phrase}
						author={phrase.author}
					/>
					
					<Button handlePhrase={changePhrase}>
						Prueba tu fortuna
					</Button>
			</div>
		</FlipContainer>
	);
}

export default App;
