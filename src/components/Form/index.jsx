import { useState } from "react";
import InputMask from "react-input-mask";

import styles from './form.module.css'

function Form(props) {
    const [result, setResult] = useState(null)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)

    function checkInputs() {
        if (!height || !weight || height == "" || weight == "") {
            return <p className={styles.adviceForm}><small>Todos os campos devem ser preenchidos</small></p>
        } else {
            return null
        }
    }

    const imcCount = () => {
        const heightM = parseFloat(height)
        const weightKg = parseFloat(weight)

        const imcCalc = weightKg / (heightM ** 2)

        if (isNaN(heightM) || isNaN(weightKg) || heightM <= 0 || weightKg <= 0) {
            return (
                null
            )
        } else {
            setResult(imcCalc.toFixed(2))
        }
        return (
            result
        )
    }

    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <div className={styles.inputCalc}>
                    <span>Altura <small>(ex. 1,75)</small></span>
                    <InputMask className={styles.input} mask="9,99" type="text" onBlur={event => setHeight(parseFloat(event.target.value.replace(',', '.').trim()))} placeholder="Digite sua altura" />
                </div>
                <div className={styles.inputCalc}>
                    <span>Peso <small>(ex. 70,90)</small></span>
                    <input className={styles.input} type="number" onBlur={event => setWeight(parseFloat(event.target.value.replace(',', '.').trim()))} maxLength={5} placeholder="Digite seu peso" />
                </div>
            </form>
            {checkInputs()}
            <button type="submit" className={styles.button} onClick={imcCount}>Calcular</button>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td colSpan={3} className={styles.tableHead}>Veja a Interpretação do IMC</td>
                    </tr>
                </thead>
                <tbody className={styles.tableRow}>
                    <tr className={styles.tableTitle}>
                        <td>IMC</td>
                        <td>Classificação</td>
                        <td>Obesidade <small>(Grau)</small></td>
                    </tr>
                    <tr className={`${result >= 1 && result <= 18.5 ? styles.warningImc : ''}`}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr className={`${result >= 18.5 && result <= 24.9 ? styles.normalImc : ''}`}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr className={`${result >= 25 && result <= 29.9 ? styles.warningImc : ''}`}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>1</td>
                    </tr>
                    <tr className={`${result >= 30 && result <= 39.9 ? styles.dangerImc : ''}`}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>2</td>
                    </tr>
                    <tr className={`${result >= 40 ? styles.dangerImc : ''}`}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>

            <div className={styles.resultImc}>
                <p>Seu IMC é:</p>
                <span>{result}</span>
            </div>
        </main>
    )
}

export default Form