import styled from 'styled-components';
import { Form as RSForm, Input as RSInput } from '@rocketseat/unform';

export const Form = styled(RSForm)`
    padding: 10px;
    background: #fff;
`;

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: #000;
    font-weight: bold;
    text-captalize: true;
`;

export const Input = styled(RSInput)`
    min-height: 45px;
    color: #eee;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 3px;
    opacity: 1;
`;
