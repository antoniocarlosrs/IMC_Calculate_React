import { useState } from "react";
import styles from "./App.module.css";
import logoImg from "./assets/Logo1.png";
import {levels, calculateImc, Level} from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png'

const App = () => {
  const [heightFild, setHeightField] = useState<number>(0);
  const [weighttFild, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  // Função calcular
  const handleCalculateButton = () => {
    if (heightFild && weighttFild) {
      setToShow(calculateImc(heightFild, weighttFild));
    } else {
      alert('Digite todos os campos.');
    }
  }

  // Zerar o botão toshow
  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImg} alt="Img logo" width={180} />
        </div>
      </header>
      <hr />
      <div className={styles.container}>
        <div className={styles.lefSide}>
          <h1>Calcule seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corporal, uma fórmula que calcula
            a relação entre o peso e a altura de uma pessoa. É uma das formas de
            avaliação corporal recomendadas pela Organização Mundial de Saúde
            OMS.{" "}
          </p>

          <input
            type="number"
            placeholder="Digite sua altura Ex. 1.80"
            value={heightFild > 0 ? heightFild : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            //abilitar inputs quando estiver com algo
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite seu peso Ex. 80.0"
            value={weighttFild > 0 ? weighttFild : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            //abilitar inputs quando estiver com algo
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} 
            //abilitar botão quando estiver com algo no input
            disabled={toShow ? true : false}>Calcular</button>

        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="Botão seta esquerda" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
