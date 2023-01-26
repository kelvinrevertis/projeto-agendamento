import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import { Form } from "./form"

//const [showModal, setShowModal] = useState(false)


export const Agendamentos = () => {
    return (

        <div>
            <h1>Agendamentos </h1>
            <button>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                            <Dialog.Content className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex items-center justify-center ">
                                <Dialog.Content className="bg-white py-8 px-10 rounded-xl">
                                    <Dialog.Title>Novo Agendamento</Dialog.Title>
                                    <Dialog.Content>

                                            <Form/>

                                    </Dialog.Content>
                                </Dialog.Content>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Trigger>
                </Dialog.Root>
            </button>
        </div>

    )
}

