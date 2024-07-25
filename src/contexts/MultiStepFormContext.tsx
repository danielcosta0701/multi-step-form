import { useState, createContext, useContext} from "react";

type FormData = {
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

type MultiStepFormContextType = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

  type MultiStepFormProps = {
    children: React.ReactNode;
};

export const MultiStepFormContext = createContext<MultiStepFormContextType>({} as MultiStepFormContextType);

export const useMultiStepForm = () => {
    return useContext(MultiStepFormContext);
};

export const MultiStepFormProvider = (props: MultiStepFormProps) => {
    const { children } = props;

    const [formData, setFormData] = useState<FormData>({
        name: null,
        surname: null,
        phone: null,
        email: null,
        gender: null,
        document_cpf: null,
        loanAmount: null,
        interestRate: null,
        numberOfInstallments: null,
    });

    return (
        <MultiStepFormContext.Provider value={{ formData, setFormData }}>
            {children}
        </MultiStepFormContext.Provider>
    );
};

export default MultiStepFormProvider;
