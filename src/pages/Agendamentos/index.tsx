import { FormEvent, useEffect, useState, ChangeEvent } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import type { Agendamento, FormValues } from './types'
import { Pencil, Trash } from 'phosphor-react'

export const Agendamentos = () => {

    function validateDate(date: string): boolean {
        const regex = /^\d{2}-\d{2}-\d{4}$/;
        return regex.test(date);
    }

    function formatDate(date: string): string {
        const day = date.slice(0, 2);
        const month = date.slice(2, 4);
        const year = date.slice(4, 8);
        return `${day}-${month}-${year}`;
    }

    // function validateCash(valor: string): boolean {
    //     const regex = R$\d{ 2}-\d{ 4 } $ /;
    //     return regex.test(date);
    // } m

    const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as unknown as FormValues;

        const paciente = form.paciente.value;
        const email = form.email.value;
        const cpf = form.cpf.value;
        const telefone = form.telefone.value;
        const medico = form.medico.value;
        const procedimento = form.procedimento.value;
        const valor = form.valor.value;
        let data = form.data.value;
        const checked = false;

        let storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');

        if (!validateDate(data)) {
            data = formatDate(data);
        }

        storedAgendamentos.push({ paciente, email, cpf, telefone, medico, procedimento, valor, data, checked });

        localStorage.setItem('agendamentos', JSON.stringify(storedAgendamentos));

        setAgendamentos([...storedAgendamentos]);
        event.currentTarget.reset();
    };

    useEffect(() => {
        const storedAgendamentos = JSON.parse(localStorage.getItem('agendamentos') || '[]');
        setAgendamentos(storedAgendamentos);
    }, []);


    function handleExcluir(index) {
        const newAgendamentos = [...agendamentos];
        newAgendamentos.splice(index, 1);
        localStorage.setItem('agendamentos', JSON.stringify(newAgendamentos));
        setAgendamentos(newAgendamentos);
    }


    return (
        <div>
            <h1 className="text-4xl font-bold px-4">Agendamentos </h1>
            <Dialog.Root>
                <div className="flex justify-between items-center py-5">
                    <h3 className="text-xl font-medium m-4">Lista de Agendamentos</h3>
                    <Dialog.Trigger className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Criar agendamento</Dialog.Trigger>
                </div>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                    <Dialog.Content className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex items-center justify-center ">
                        <div className="bg-white py-8 px-10 rounded-xl">
                            <Dialog.Title className="text-2xl font-bold">Novo gendamento</Dialog.Title>

                            <form className="mt-1" onSubmit={handleSubmit}>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="paciente" className="text-sm font-medium">Paciente</label>
                                    <input id="paciente" type="text" name="paciente" placeholder="Nome do paciente" className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1 ">
                                    <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                                    <input id="email" type="text" name="email" placeholder="email@email.com" className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="cpf" className="text-sm font-medium">CPF</label>
                                    <input id="cpf" type="text" name="cpf" placeholder="000.000.000-00" className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="telefone" className="text-sm font-medium">Telefone</label>
                                    <input id="telefone" type="text" name="telefone" placeholder="(xx)xxxxx-xxxx" className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="flex flex-col py-1">
                                    <label htmlFor="medico" className="text-sm font-medium">Médico</label>
                                    <input id="medico" type="text" name="medico" placeholder="Médico" className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="procedimento" className="text-sm font-medium">Procedimento</label>
                                    <input id="procedimento" type="text" name="procedimento" placeholder="Procedimento médico" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="valor" className="text-sm font-medium">Valor</label>
                                    <input id="valor" type="text" name="valor" placeholder="R$00,00" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col py-1">
                                    <label htmlFor="data" className="text-sm font-medium">Data</label>
                                    <input id="data" type="text" name="data" placeholder="00/00/0000" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <footer className="pt-1 flex justify-between">
                                    <button className="bg-blue-500 px-4 py-2 rounded-full text-white">Cadastrar</button>
                                    <Dialog.Close className="bg-orange-500 px-4 py-2 rounded-full text-white">Fechar</Dialog.Close>
                                </footer>
                            </form>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <div className="bg-white rounded-lg overflow-hidden">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Atendido</th>
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
                        {agendamentos/*.filter(agendamento => agendamento.data === new Date().toLocaleDateString())filtro de data*/
                            .map((agendamento, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            onChange={(event) => {
                                                localStorage.setItem(`checkbox_${index}`, event.target.checked.toString());
                                            }}
                                            defaultChecked={JSON.parse(localStorage.getItem(`checkbox_${index}`) || 'false')}
                                        />
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
                                        <div className="flex ml-1">
                                            <button className=" bg-white text-red-500 border-none" onClick={() => handleExcluir(index)}>
                                                <Trash size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

