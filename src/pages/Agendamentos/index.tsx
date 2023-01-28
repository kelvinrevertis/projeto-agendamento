import React, { FormEvent, useEffect, useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import type { Agendamento, FormValues } from './types'


export const Agendamentos = () => {

    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as unknown as FormValues;
        const paciente = form.paciente.value;
        const email = form.email.value;
        const cpf = form.cpf.value;
        const telefone = form.telefone.value;
        const medico = form.medico.value;
        const procedimento = form.procedimento.value;
        const valor = form.valor.value;
        const data = form.data.value;

        let storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');


        storedAgendamentos.push({ paciente, email, cpf, telefone, medico, procedimento, valor, data });


        localStorage.setItem('agendamentos', JSON.stringify(storedAgendamentos));

        setAgendamentos([...storedAgendamentos]);
        event.currentTarget.reset();
    };

    useEffect(() => {
        const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');
        setAgendamentos(storedAgendamentos);
    }, []);

    return (
        <div>
            <h1>Agendamentos </h1>
            <Dialog.Root>
                <Dialog.Trigger>
                    Criar agendamento
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                    <Dialog.Content className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex items-center justify-center ">
                        <div className="bg-white py-8 px-10 rounded-xl">
                            <Dialog.Title>Novo gendamento</Dialog.Title>

                            <form className="mt-8" onSubmit={handleSubmit}>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="paciente">Paciente</label>
                                    <input id="paciente" type="text" name="paciente" placeholder="Nome do paciente" />
                                </div>

                                <div className="flex flex-col py-2 ">
                                    <label htmlFor="email">E-Mail</label>
                                    <input id="email" type="text" name="email" placeholder="email@email.com" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="cpf">CPF</label>
                                    <input id="cpf" type="text" name="cpf" placeholder="000.000.000-00" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input id="telefone" type="text" name="telefone" placeholder="(xx)xxxxx-xxxx" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="medico">Médico</label>
                                    <input id="medico" type="text" name="medico" placeholder="Médico" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="procedimento">Procedimento</label>
                                    <input id="procedimento" type="text" name="procedimento" placeholder="Procedimento médico" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="valor">Valor</label>
                                    <input id="valor" type="text" name="valor" placeholder="R$00,00" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="data">Data</label>
                                    <input id="data" type="text" name="data" placeholder="00/00/0000" />
                                </div>

                                <footer>
                                    <button>Cadastrar</button>
                                    <Dialog.Close className='bg-orange-500'>Fechar</Dialog.Close>
                                </footer>
                            </form>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <div className="bg-white rounded-lg overflow-hidden">
                <h2 className="text-lg font-medium m-4">Lista de Agendamentos</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Atendidos</th>
                            <th className="px-4 py-2">Paciente</th>
                            <th className="px-4 py-2">E-Mail</th>
                            <th className="px-4 py-2">CPF</th>
                            <th className="px-4 py-2">Telefone</th>
                            <th className="px-4 py-2">Médico</th>
                            <th className="px-4 py-2">Procedimento</th>
                            <th className="px-4 py-2">Valor</th>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendamentos.map((agendamento, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>
                                <td className="px-4 py-2">{agendamento.paciente}</td>
                                <td className="px-4 py-2">{agendamento.email}</td>
                                <td className="px-4 py-2">{agendamento.cpf}</td>
                                <td className="px-4 py-2">{agendamento.telefone}</td>
                                <td className="px-4 py-2">{agendamento.medico}</td>
                                <td className="px-4 py-2">{agendamento.procedimento}</td>
                                <td className="px-4 py-2">{agendamento.valor}</td>
                                <td className="px-4 py-2">{agendamento.data}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>


    )

}

