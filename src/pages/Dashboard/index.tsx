import { Card } from "../../components/Card"
import * as C from './styles'

export const Dashboard = () => {
    return (
        <div>
        <C.CardContainer>
            <C.CardWrapper><Card title="Agendamentos do dia" text="Texto do card" /></C.CardWrapper>
            <C.CardWrapper><Card title="Pacientes atendidos no dia" text="Texto do card" /></C.CardWrapper>
            <C.CardWrapper><Card title="Faturamento do dia" text="Texto do card" /></C.CardWrapper>
        </C.CardContainer>
        </div>
    )
}