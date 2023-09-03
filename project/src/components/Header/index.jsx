import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className={styles.header}>
            <Link to='/'>
            <span>Avaliação Institucional</span>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/avaliacao'>Avaliação</Link>
                <Link to='/configuracoes'>Configurações</Link>
            </nav>
        </header>
    )
}
export default Header