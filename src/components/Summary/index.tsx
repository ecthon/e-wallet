import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 10.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ 4.000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="Saldo" />
                </header>
                <strong>R$ 6.000,00</strong>
            </div>
        </Container>
    )
}