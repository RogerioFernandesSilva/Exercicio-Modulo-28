import styles from './header.module.css'
const Header = () => {

    return (
        <>
            <header>
                <div className={styles.hero}></div>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Cálculo IMC</h1>
                    <p className={styles.text}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                    <p className={styles.text}>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
                    <p className={styles.text}>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela:</p>
                </div>
            </header>
            <p className={styles.advice}><small>Importante: siga os exemplos e use pontos ou vírgulas como separadores.</small></p>
        </>
    )
}

export default Header