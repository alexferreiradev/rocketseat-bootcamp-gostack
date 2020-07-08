import React from 'react';
import { Dropdown } from 'react-bootstrap';

import { DropdownItem } from './styles';

function ModalContextOptions({
    actionItemTextList,
    onClick: handleActionClick,
}) {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">***</Dropdown.Toggle>

            <Dropdown.Menu>
                {actionItemTextList.map((actionText, index) => (
                    <DropdownItem key={actionText} href="#/">
                        <button
                            type="button"
                            onClick={() => handleActionClick(index, actionText)}
                        >
                            {actionText}
                        </button>
                    </DropdownItem>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ModalContextOptions;
