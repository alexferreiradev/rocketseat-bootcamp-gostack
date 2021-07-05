import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../logo.svg';

export const Container = styled.div`
    padding: 6px 30px;
    min-width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background: #fff;
`;

export const Logo = styled(LogoSvg)`
    margin: 13px 0px;

    svg {
        width: 50px;
        height: 50px;
    }
`;
export const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;

    li {
        padding: 4px;
    }

    li a {
        text-decoration: none;
        color: #ccc;
        text-transform: uppercase;
    }
    li:active {
        color: #000;
    }
`;
export const UserConfigs = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;
export const SairBt = styled.button`
    border: none;
    background: transparent;
    color: #ff0000a1;
    font-size: 9px;
    font-weight: 600;
    text-transform: lowercase;
    padding: 4px;
`;
