import Header from "../../components/Header"
import Footer from "../../components/Footer"
import  styles from "./Home.module.css"
function Home() {
    return (
        <>
            <Header />
            <section className={styles.home}>
                <div className='inicio'>
                    <p>
                        <span>Ajude-nos a promover uma educação com excelência </span> <br /><br /> Avaliar disciplinas e professores é fundamental para melhorar a educação.<br /> Essa troca constante de feedback ajuda a escola a se aprimorar <br /> e proporciona um ensino de maior qualidade.
                    </p>
                </div>
                <figure>
                    <img className='img-home' src='/Learning-amico.svg' alt='imagem de Home' />
                </figure>

            </section>
            <Footer />
        </>
    )
}
export default Home