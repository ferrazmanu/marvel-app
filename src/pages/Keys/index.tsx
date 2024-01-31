import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setCookie } from '../../utils/cookies';
import { useDispatch } from 'react-redux';
import { setKeys } from '../../redux/actions';
import { InputsProps } from '../../types/types';
import { FullContainer } from '../../components/Container';
import { FormContainer } from './styles';
import { Button } from '../../components/Button';

import img from '../../assets/images/3.jpg';

const Keys: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<InputsProps>();

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<InputsProps> = (data) => {
        dispatch(setKeys(data.publicKey, data.privateKey));

        setCookie('publicKey', data.publicKey, { expires: 7 });
        setCookie('privateKey', data.privateKey, { expires: 7 });

        window.location.href = '/';
        reset();
    };

    const inputs = [
        {
            label: 'Public Key',
            name: 'publicKey',
            required: true,
            error: 'Este campo é obrigatório',
        },
        {
            label: 'Private Key',
            name: 'privateKey',
            required: true,
            error: 'Este campo é obrigatório',
        },
    ];

    return (
        <FormContainer>
            <FullContainer fullgradient={true}>
                <img src={img} loading="eager" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-content">
                        <div className="title">
                            <h2>Chaves da Marvel API</h2>
                            <p>
                                Por favor, insira suas chaves da Marvel API
                                obtidas via{' '}
                                <a href="https://developer.marvel.com/">
                                    https://developer.marvel.com/
                                </a>{' '}
                                para poder acessar o conteúdo!
                            </p>
                        </div>

                        {inputs.map((input) => {
                            return (
                                <div className="input-box" key={input.name}>
                                    <label>{input.label}</label>
                                    <div className="input-wrapper">
                                        <input
                                            {...register(`${input.name}`, {
                                                required: input.required,
                                            })}
                                        />
                                    </div>
                                    {errors?.[input.name] && (
                                        <span className="error">
                                            {input.error}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <Button
                        loading={isSubmitting}
                        type="submit"
                        text="Enviar"
                    />
                </form>
            </FullContainer>
        </FormContainer>
    );
};

export default Keys;
