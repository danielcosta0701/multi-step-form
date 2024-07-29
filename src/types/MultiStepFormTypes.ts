export type GeneralFormData = {
    name: string | null,
    surname: string | null,
    phone: string | null,
    email: string | null,
    gender: number | null,
    document_cpf: string | null,
    loan_amount: number | null;
    interest_rate: number | null;
    number_of_installments: number | null;
    total_value: number | string | null
};

export type MultiStepFormContextType = {
    formData: GeneralFormData;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export type MultiStepFormProps = {
    children: React.ReactNode;
};