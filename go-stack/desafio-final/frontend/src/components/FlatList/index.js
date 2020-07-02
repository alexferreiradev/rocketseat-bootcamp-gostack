import React from 'react';

import { Container } from './styles';

function FlatList({
    headerTextList,
    itemDataList,
    actionItemTextList,
    actionItemListenerList,
}) {
    return (
        <Container>
            {headerTextList.map((headerItem) => (
                <span>headerItem</span>
            ))}
            {itemDataList.map((itemData) =>
                headerTextList.map((headerItem) => (
                    <span>{itemData[headerItem]}</span>
                ))
            )}
            <ul>
                {actionItemTextList.map((actionText, index) => (
                    <li
                        key={actionText}
                        onClick={() => actionItemListenerList[index]}
                    >
                        {actionText}
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default FlatList;
