import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/forms/inputs/Input/Input";
import { Select } from "../../components/forms/inputs/Select/Select";
import { useMultiStepForm } from '../../contexts/MultiStepFormContext';
import { StepProps } from '../../types/StepTypes';
import { GeneralFormData } from '../../types/MultiStepFormTypes';
import { Button } from '../../components/Button/Button';
import { GENDERS_MOCK } from '../../mocks/mocks';
import { showSuccessToast } from "../../utils/ToastSucess";
import './Step1.scss';

interface FormStep1 {
    name: string;
    surname: string;
    phone: string;
    email: string;
    gender: number;
    document_cpf: string;
}

export default function Step1(props: StepProps) {
    const { nextStep } = props;
    const { formData, setFormData } = useMultiStepForm();

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors, isValid }
    } = useForm<FormStep1>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<FormStep1> = (data) => {
        const obj = {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            email: data.email,
            gender: data.gender,
            document_cpf: data.document_cpf
        };

        setFormData((prevFormData: GeneralFormData) => ({ ...prevFormData, ...obj }));
        showSuccessToast("Dados pessoais enviados");
        nextStep();
    };

    return (
        <div className="step1-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <div className="input">
                        <Input 
                            label="Nome"
                            type="text"
                            placeholder="Digite seu nome"
                            defaultValue={formData.name}
                            register={register("name", { 
                                required: "Nome é obrigatório",
                                minLength: { value: 3, message: "Nome deve ter pelo menos 3 caracteres" }, 
                                maxLength: { value: 50, message: "Nome deve ter no máximo 50 caracteres" }
                            })}
                            error={errors.name}
                        />
                    </div>
                    <div className="input">
                        <Input 
                            label="Sobrenome"
                            type="text"
                            placeholder="Digite seu sobrenome"
                            defaultValue={formData.surname}
                            register={register("surname", { 
                                required: "Sobrenome é obrigatório", 
                                minLength: { value: 3, message: "Sobrenome deve ter pelo menos 3 caracteres" }, 
                                maxLength: { value: 50, message: "Sobrenome deve ter no máximo 50 caracteres" }
                            })}
                            error={errors.surname}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input">
                        <Input 
                            label="Celular"
                            type="text"
                            placeholder="Digite seu celular"
                            defaultValue={formData.phone}
                            register={register("phone", { 
                                required: "Celular é obrigatório" 
                            })}
                            error={errors.phone}
                        />
                    </div>
                    <div className="input">
                        <Input 
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu e-mail"
                            defaultValue={formData.email || ''}
                            register={register("email", { 
                                required: "E-mail é obrigatório" 
                            })}
                            error={errors.email}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="input">
                        <Select 
                            label="Gênero"
                            options={GENDERS_MOCK}
                            placeholder="Escolha seu gênero"
                            defaultValue={formData.gender}
                            register={register("gender", { 
                                required: "Gênero é obrigatório" 
                            })}
                            error={errors.gender}
                        />
                    </div>
                    <div className="input">
                        <Input 
                            label="CPF"
                            type="text"
                            placeholder="Digite seu CPF"
                            defaultValue={formData.document_cpf}
                            register={register("document_cpf", { 
                                required: "CPF é obrigatório" 
                            })}
                            error={errors.document_cpf}
                        />
                    </div>
                </div>

                <div className="button-container">
                    <Button className="clear-button" onClick={() => reset()} variant="outlined">
                        <Button.Text>Limpar</Button.Text>
                    </Button>
                    
                    <Button className="submit-button" type="submit" disabled={!isValid}>  
                        <Button.Text>Próximo</Button.Text>
                    </Button>
                </div>
            </form>
        </div>
    );
}
