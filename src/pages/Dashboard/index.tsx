import { useEffect, useState } from "react";
import { Card } from "../../components/Card"
import { Agendamento } from "../Agendamentos/types";
import * as C from './styles'

export const Dashboard = () => {
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

    useEffect(() => {
        const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');
        setAgendamentos(storedAgendamentos);
    }, []);

    
    const isChecked = agendamentos.map((_, index) =>
        JSON.parse(localStorage.getItem(`checkbox_${index}`) || 'false')
    );

    const sumAll = agendamentos.reduce((acc, item) => acc + Number(item.valor), 0)

    return (
        <div>
            <C.CardContainer>
                <h1 className="fixed px-4">Dashboard</h1>
                <C.CardWrapper><Card title="Agendamentos do dia" text={agendamentos.length.toString()} /></C.CardWrapper>
                <C.CardWrapper><Card title="Pacientes atendidos no dia" text={isChecked.filter(Boolean).length.toString()} /></C.CardWrapper>
                <C.CardWrapper><Card title="Faturamento do dia" text={sumAll.toString()} /></C.CardWrapper>
            </C.CardContainer>
        </div>
    )
}