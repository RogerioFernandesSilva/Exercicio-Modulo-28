import styles from './footer.module.css'
import linkedinLogo from '../../assets/linkedin-maioor-colorido.png'
import githubLogo from '../../assets/Github-maior-black.jpg'

export default function Footer() {

    return (
        <footer>
            <ul className={styles.links}>
                <li className={styles.linksItem}><a title='Link para meu Linkedin' target='_blank' href="https://www.linkedin.com/in/ystanzani/"><img src={linkedinLogo} alt="Logo do Linkedin" /></a></li>
                <li className={styles.linksItem}><a title='Link para meu GitHub' target='_blank' href="https://github.com/ystanz"><img src={githubLogo} alt="Logo do GitHub" /></a></li>
            </ul>
            <p>Página ficticia, desenvolvida apenas para fins de estudo em programação.</p>
            <p>© Calculadora de IMC - 2024. Desenvolvido por Yuri Stanzani</p>
            <p><small>Algumas informações e elementos foram retirados do site: <a title='Link para o site' target='_blank' href="https://www.programasaudefacil.com.br/calculadora-de-imc#:~:text=C%C3%A1lculo%20IMC,sua%20altura%20elevada%20ao%20quadrado.">Programa Saúde Fácil</a> </small></p>
        </footer>
    )
}