import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getCookie, setCookie } from '../../utils/cookies';
import { InputsProps } from '../../types/types';
import { FullContainer } from '../../components/Container';
import { Wrapper } from './styles';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

import img from '../../assets/images/3.jpg';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/selectors';

const Keys: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<InputsProps>({
        defaultValues: {
            publicKey: getCookie('publicKey') || '',
            privateKey: getCookie('privateKey') || '',
        },
    });

    const isUserAuth = useSelector(selectAuth);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputsProps> = (data) => {
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
        <Wrapper>
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

                    <div className="buttons">
                        <Button
                            loading={isSubmitting}
                            type="submit"
                            text={isUserAuth ? 'Alterar' : 'Enviar'}
                        />
                        {isUserAuth && (
                            <Button
                                text="Voltar"
                                type="button"
                                onClick={() => navigate(-1)}
                            />
                        )}
                    </div>
                </form>
            </FullContainer>
        </Wrapper>
    );
};

export default Keys;
