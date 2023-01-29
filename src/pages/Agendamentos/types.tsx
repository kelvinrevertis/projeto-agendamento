export interface Agendamento {
    paciente: string;
    email: string;
    cpf: string;
    telefone: number;
    medico: string;
    procedimento: string;
    valor: string;
    data: string;

}

export interface HtmlInput<T>{
    checked: any;
    value: T
}

export interface FormValues {
    paciente: HtmlInput<string>;
    email: HtmlInput<string>;
    cpf: HtmlInput<string>;
    telefone: HtmlInput<number>;
    medico: HtmlInput<string>;
    procedimento: HtmlInput<string>;
    valor: HtmlInput<string>;
    data: HtmlInput<string>;
}