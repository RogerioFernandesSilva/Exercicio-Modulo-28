import { useState } from "react"
import styles from './Form.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0.0)
    const [altura, setAltura] = useState(0.0)

 // Função para formatar a altura corretamente
    const handleAlturaChange = (e) => {
    let valor = e.target.value;

    // Se o usuário digitar um número inteiro maior que 3 dígitos, ajustamos para o formato correto
    if (valor.length >= 3 && !valor.includes(".")) {
        let parteInteira = valor.slice(0, valor.length - 2);
        let parteDecimal = valor.slice(-2);
        valor = `${parteInteira}.${parteDecimal}`;
    }

    setAltura(valor);
    };

    const renderizaResultado = () => {
        const imc = peso/(altura * altura)

        switch (true) {
            case imc < 18.5:
                return (
                    <p className={styles.resposta}>
                        Seu IMC é de <strong>{imc.toFixed(2)}</strong> e indica que você está <strong>abaixo do peso</strong>. Pode ser importante buscar orientação médica e nutricional para garantir que sua alimentação esteja adequada às suas necessidades.
                    </p>
                );
            case imc >= 18.5 && imc < 24.99:
                return (
                    <p className={styles.resposta}>
                        Parabéns! Seu IMC é de <strong>{imc.toFixed(2)}</strong> e está <strong>dentro da faixa considerada saudável</strong>. Manter uma alimentação equilibrada e praticar atividades físicas regularmente ajuda a preservar sua saúde.
                    </p>
                );
            case imc >= 25 && imc < 29.99:
                return (
                    <p className={styles.resposta}>
                        Seu IMC é de <strong>{imc.toFixed(2)}</strong> e indica <strong>sobrepeso</strong>. Pequenas mudanças na alimentação e no estilo de vida, como incluir mais exercícios físicos e reduzir alimentos ultraprocessados, podem ajudar a manter sua saúde.
                    </p>
                    )
            case imc >= 30 && imc < 34.99:
                return (
                    <p className={styles.resposta}>
                        Seu IMC é de <strong>{imc.toFixed(2)}</strong> e indica <strong>obesidade grau I</strong>. Isso pode aumentar o risco de problemas de saúde, como diabetes e hipertensão. Consultar um profissional de saúde pode ser um bom passo para melhorar seu bem-estar.
                    </p>
                    )
            case imc >= 35 && imc < 39.99:
                return (
                    <p className={styles.resposta}>
                        Seu IMC é de <strong>{imc.toFixed(2)}</strong> e indica <strong>obesidade grau II</strong>, que pode estar associada a maiores riscos de doenças crônicas. Procurar um médico e um nutricionista pode ajudar a encontrar estratégias para uma vida mais saudável.
                    </p>
                    )
            case imc >= 40:
                return (
                    <p className={styles.resposta}>
                        Seu IMC é de <strong>{imc.toFixed(2)}</strong> e está na faixa de <strong>obesidade grau III</strong>, considerada obesidade mórbida. Esse nível pode trazer sérios riscos à saúde. Um acompanhamento médico é essencial para definir as melhores estratégias de tratamento e melhoria da qualidade de vida.
                    </p>
                    )
            default:
                return (
                    <p className={styles.resposta}>
                        "Olá! Quer saber seu IMC? Favor se atentar ao virgula na altura. <br>
                        </br> Informe seu peso e altura abaixo e descubra em qual categoria você se encaixa.<br>
                        </br> Vamos lá! 💪📏⚖️"
                    </p>
                )
        }
    }

    return (
        <div className={styles.container}>
            <form>
                <label htmlFor="peso">Seu peso (kg)</label>
                <input
                    type="number"
                    id="peso"
                    placeholder="Ex: 83.3"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    step="0.1" // Permite casas decimais
                    min="1"
                    max="500"
                />

                <label htmlFor="altura">Sua altura (m)</label>
                <input
                    type="number"
                    id="altura"
                    placeholder="Ex: 1.85"
                    value={altura}
                    onChange={handleAlturaChange}
                    step="0.01" // Permite valores decimais
                    min="0.50"
                    max="2.50"
                />
                {renderizaResultado()}
            </form>
        </div>
    );
};

export default Formulario;