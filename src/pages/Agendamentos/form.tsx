export const Form = () => {
    return (

        <form>

            <div>
                <label htmlFor="paciente">Paciente</label>
                <div>
                    <input id="paciente" type="text" name="paciente"  placeholder="Nome do paciente" />
                </div>
            </div>
            <div>
                <label htmlFor="email">E-Mail</label>
                <div>
                    <input id="email" type="text" name="email"  placeholder="E-mail" />
                </div>
            </div>
            <div>
                <label htmlFor="cpf">CPF</label>
                <div>
                    <input id="cpf" type="text" name="cpf"  placeholder="000.000.000-00" />
                </div>
            </div>
            <div>
                <label htmlFor="telefone">Telefone</label>
                <div>
                    <input id="telefone" type="text" name="telefone" placeholder="(xx)xxxxx-xxxx" />
                </div>
            </div>
            <div>
                <label htmlFor="medico">Médico</label>
                <div>
                    <input id="medico" type="text" name="medico"  placeholder="Médico" />
                </div>
            </div>
            <div>
                <label htmlFor="procedimento">Procedimento</label>
                <div>
                    <input id="procedimento" type="text" name="procedimento" placeholder="Procedimento médico" />
                </div>
            </div>
            <div>
                <label htmlFor="valor">Valor</label>
                <div>
                    <input id="valor" type="text" name="valor" placeholder="R$00,00" />
                </div>
            </div>
            <div>
                <label htmlFor="data">Data</label>
                <div>
                    <input id="data" type="text" name="data" placeholder="00/00/0000" />
                </div>
            </div>
        </form>

    )
}
