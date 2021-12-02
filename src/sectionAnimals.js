import imagem1 from './assets/imagem1.jpg';
import imagem2 from './assets/imagem2.jpg';
import imagem3 from './assets/imagem3.jpg';
import imagem4 from './assets/imagem4.jpg';
import imagem5 from './assets/imagem5.jpg';
import imagem6 from './assets/imagem6.jpg';
import AnimalsDescription from './animalsDescription';
import './App.css';

const SectionAnimals = () => {
  return (
    <>
      <section className="grid-section animais" id="animais">
        <h1 className="titulo"> Animais Fantásticos </h1>
        <ul className="animais-lista">
          <li> <img src={imagem1} alt="" /> </li>
          <li> <img src={imagem2} alt="" /></li>
          <li><img src={imagem3} alt="" /></li>
          <li><img src={imagem4} alt="" /></li>
          <li><img src={imagem5} alt="" /></li>
          <li><img src={imagem6} alt="" /></li>
        </ul>

        <AnimalsDescription />
      </section>

    </>

  );
}

export default SectionAnimals;
