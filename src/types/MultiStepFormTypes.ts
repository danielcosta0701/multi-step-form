export type GeneralFormData = {
    name: string | null,
    surname: string | null,
    phone: string | null,
    email: string | null,
    gender: number | null,
    document_cpf: string | null,
    loanAmount: number | null;
    interestRate: number | null;
    numberOfInstallments: number | null;
};

export type MultiStepFormContextType = {
    formData: GeneralFormData;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export type MultiStepFormProps = {
    children: React.ReactNode;
};