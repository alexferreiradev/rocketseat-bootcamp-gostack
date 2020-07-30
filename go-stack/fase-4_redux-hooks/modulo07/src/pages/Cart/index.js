import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) =>
        state.cart.map((item) => ({
            ...item,
            subTotal: formatPrice(item.amount * item.price),
        }))
    );
    const totalCart = useSelector((state) =>
        formatPrice(
            state.cart.reduce((total, item) => {
                return total + item.amount * item.price;
            }, 0)
        )
    );

    function incrementAmount(product) {
        dispatch(CartActions.updateAmountRequest(product.id, 1));
    }

    function decrementAmount(product) {
        dispatch(CartActions.updateAmountRequest(product.id, -1));
    }

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
                                    <button
                                        type="button"
                                        onClick={() =>
                                            decrementAmount(cartItem)
                                        }
                                    >
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
                                    <button
                                        type="button"
                                        onClick={() =>
                                            incrementAmount(cartItem)
                                        }
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{cartItem.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            CartActions.removeFromCart(
                                                cartItem.id
                                            )
                                        )
                                    }
                                >
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
                    <strong>{totalCart}</strong>
                </Total>
            </footer>
        </Container>
    );
}

export default Cart;
