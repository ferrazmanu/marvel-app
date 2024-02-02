import { styled } from 'styled-components';

import DarkModeIcon from '../../assets/images/dark.svg';
import LightModeIcon from '../../assets/images/light.svg';

export const ButtonWrapper = styled.div`
    position: fixed;
    left: 4px;
    top: 4px;
    z-index: 99;

    .button {
        width: 54px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 20px;
        background-color: #111;
    }

    .checkbox {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
    }

    .checkbox:checked + .knobs:before {
        content: url(${LightModeIcon});
        left: 27px;
        background-color: #fff;
        color: #000;
    }

    .checkbox:checked ~ .layer {
        background-color: #fcebeb;
    }

    .knobs {
        z-index: 2;
        transition: 0.3s ease all;

        &:before {
            content: url(${DarkModeIcon});
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 4px;
            color: #fff;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            line-height: 1;
            padding: 1px 2px;
            background-color: #363636;
            border-radius: 50%;
            transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
            aspect-ratio: 20/20;
        }
    }

    .layer {
        width: 100%;
        background-color: #ebf7fc;
        transition: 0.3s ease all;
        z-index: 1;
    }
`;
