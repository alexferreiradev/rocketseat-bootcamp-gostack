import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const DropdownItem = styled(Dropdown.Item)`
    background: #eee;
    border-radius: 3px;

    button {
        background: transparent;
        border: 0px;
        font-size: 14px;
        font-weight: bold;
    }
`;
