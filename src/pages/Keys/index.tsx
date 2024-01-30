import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCookie } from '../../utils/cookies';
import { useDispatch } from 'react-redux';
import { setKeys } from '../../redux/actions';
import { InputsProps } from './types';

const Keys: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Please insert your marvel api keys</h2>
            <div>
                <label>Public Key</label>
                <input {...register('publicKey', { required: true })} />
                {errors.publicKey && <span>This field is required</span>}
            </div>

            <div>
                <label>Private Key</label>
                <input {...register('privateKey', { required: true })} />
                {errors.privateKey && <span>This field is required</span>}
            </div>

            <input type="submit" />
        </form>
    );
};

export default Keys;
