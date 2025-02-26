import styles from './App.module.css'
import logoImg from './assets/Logo1.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logoImg} alt="Img logo" width={180} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.lefSide}>
          ...
        </div>

        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App
