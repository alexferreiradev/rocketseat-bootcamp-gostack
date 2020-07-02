import styled from 'styled-components';

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background-color: #7159c1;
`;
export const Container = styled.div``;
export const Title = styled.h1``;
export const PesquizarInput = styled.input``;
export const CadastrarBt = styled.button``;
export const FlatList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: space-around;
    margin: 22px 0 14px 0;
`;
export const ListHeader = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 22px 0 14px 0;

    li {
        font-family: 'Roboto-Bold', sans-serif;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0px;
        color: #444444;
        opacity: 1;
    }
`;
export const ListItem = styled.li`
    min-height: 57px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    margin-bottom: 14px;
    background: #fff;
`;
