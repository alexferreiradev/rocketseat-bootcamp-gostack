import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Main() {
    return (
        <ProductList>
            <li>
                <img src="teste.png" alt="Tenis" />
                <strong>Tenis muito legal</strong>
                <span>R$129</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Main;
