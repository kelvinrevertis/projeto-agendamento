import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import { Form } from "../../components/Form/form"

//const [showModal, setShowModal] = useState(false)


export const Agendamentos = () => {
    return (

        <div>
            <h1>Agendamentos </h1>
            <Dialog.Root>
                <Dialog.Trigger>
                    Criar agendamento
                </Dialog.Trigger>
                <Form />
            </Dialog.Root>


        </div>

    )
}

