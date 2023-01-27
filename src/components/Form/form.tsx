import * as Dialog from '@radix-ui/react-dialog'


export const Form = () => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex items-center justify-center ">
                <div className="bg-white py-8 px-10 rounded-xl">
                    <Dialog.Title>Novo gendamento</Dialog.Title>
                    <form className="mt-8">

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
                            <Dialog.Close className='bg-orange-500'>Cancelar</Dialog.Close>
                        </footer>
                    </form>
                </div>
            </Dialog.Content>
        </Dialog.Portal>

    )
}
