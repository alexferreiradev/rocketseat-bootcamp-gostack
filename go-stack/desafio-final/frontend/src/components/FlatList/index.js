import styled from 'styled-components';

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
