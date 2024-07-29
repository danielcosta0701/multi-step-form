import { useState, createContext, useContext} from "react";
import { GeneralFormData, MultiStepFormProps, MultiStepFormContextType } from "../types/MultiStepFormTypes";


export const MultiStepFormContext = createContext<MultiStepFormContextType>({} as MultiStepFormContextType);

export const useMultiStepForm = () => {
    return useContext(MultiStepFormContext);
};

export const MultiStepFormProvider = (props: MultiStepFormProps) => {
    const { children } = props;

    const [formData, setFormData] = useState<GeneralFormData>({
        name: null,
        surname: null,
        phone: null,
        email: null,
        gender: null,
        document_cpf: null,
        loan_amount: null,
        interest_rate: null,
        number_of_installments: null,
        total_value: null
    });

    return (
        <MultiStepFormContext.Provider value={{ formData, setFormData }}>
            {children}
        </MultiStepFormContext.Provider>
    );
};

export default MultiStepFormProvider;
