import styles from './Footer.module.css'
import logo1 from './image/facebook.png';
import logo2 from './image/github.png';
import logo3 from './image/instagram.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={styles.footer}>
             <div className={styles.logo_container}>
              <img src={logo1} alt="Logo 1" className={styles.logo} />
              <Link to="https://github.com/RaylineM"> <img src={logo2} alt="Logo 2" className={styles.logo} /></Link>
                <img src={logo3} alt="Logo 2" className={styles.logo} />
            </div>
            ©Rayline
        </footer>
    )
}
export default Footer