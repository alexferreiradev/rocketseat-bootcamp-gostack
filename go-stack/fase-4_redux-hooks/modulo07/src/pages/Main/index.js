import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

function Main() {
    const dispatch = useDispatch();
    const [produtoList, setProdutoList] = useState([]);

    async function fetchData() {
        const res = await api.get('/products');
        const data = res.data.map((item) => {
            return {
                ...item,
                priceFormatted: formatPrice(item.price),
            };
        });
        setProdutoList(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleAddCart(produto) {
        dispatch({ type: '@cart/add', payload: produto });
    }

    return (
        <ProductList>
            {produtoList.map((prod) => {
                return (
                    <li key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <strong>{prod.title}</strong>
                        <span>{prod.price}</span>
                        <button
                            type="button"
                            onClick={() => handleAddCart(prod)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" /> 3
                            </div>

                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                );
            })}
        </ProductList>
    );
}

export default Main;
