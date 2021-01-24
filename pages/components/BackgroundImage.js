import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styles from '../../styles/Background.module.css'

const BackgrondImage =() => {
  const { selectedSongKey } = useContext(AppContext);
  return (
    <div className={styles.blurBackground} style={{'backgroundImage': `url("https://img.youtube.com/vi/${selectedSongKey}/0.jpg")`}} />
  );
}

export default BackgrondImage;