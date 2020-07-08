import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: #7159c1;
`;
export const Container = styled.div``;
export const Title = styled.h1``;
export const PesquizarInput = styled.input`
    min-width: 250px;
    border-radius: 3px;
    padding: 4px;
`;
export const CadastrarBt = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #7d40e7;
    height: 36px;
    width: 142px;
    border: 1px solid #7d40e7;
    border-radius: 4px;

    a {
        text-decoration: none;
        color: #fff;
        margin: 9px 9px;

        svg {
        }
    }
`;
export const EntregadorField = styled.div`
    display: flex;

    flex-direction: row;
    justify-content: left;
    align-items: center;

    span {
        margin-left: 10px;
    }
`;
export const EntregadorImg = styled.img`
    height: 25px;
    width: 25px;
    max-height: 55px;
    max-width: 55px;
    border-radius: 100%;
`;

export const ModalHeader = styled(Modal.Header)`
    flex: 1;
    flex-direction: column;
`;

export const ModalBody = styled(Modal.Body)`
    flex: 1;
    flex-direction: column;
`;
export const ImageAssinatura = styled.img`
    height: 100px;
    width: 100px;
`;
