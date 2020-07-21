import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Sub total</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cartItem) => (
                        <tr key={cartItem.id}>
                            <td>
                                <img
                                    src={cartItem.image}
                                    alt={cartItem.title}
                                />
                            </td>
                            <td>
                                <strong>{cartItem.title}</strong>
                                <span>{cartItem.priceFormmatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={cartItem.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 123,45</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 120,23</strong>
                </Total>
            </footer>
        </Container>
    );
}

export default Cart;
