import { useContext } from "react";
import { CartContext } from "../store";
import { type } from "@testing-library/user-event/dist/type";

export default function Cart() {
    const [state, dispatch] = useContext(CartContext);
    return (
        <div className="bg-light p-3">
            {/* {JSON.stringify(state.cartList)} */}
            <table className="table align-middle">
                <tbody>
                    {state.cartList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <button type="button" className="btn btn-sm"
                                    onClick={() => {
                                        dispatch({
                                            type: 'REMOVE_CART_ITEM',
                                            payload: {
                                                ...item
                                            }
                                        })
                                    }}>X</button>
                                </td>
                                <td>
                                    <img src={item.img} className="table-image" alt="" />
                                </td>
                                <td>
                                    {item.title}
                                    <br />
                                    <small className="text-muted">NT$ {item.price}</small>
                                </td>
                                <td>
                                    <select name="" id="" className="form-select" value={item.quantity}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const quantity = parseInt(e.target.value);
                                            dispatch({
                                                type: 'CHANGE_CART_QUANTITY',
                                                payload: {
                                                    ...item,
                                                    quantity
                                                }
                                            });
                                        }}>
                                        {[...Array(20)].map((_, i) => {
                                            return (
                                                <option value={i+1} key={i+1}>{i+1}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td className="text-end">
                                    NT$ {item.price * item.quantity}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan={5} className="text-end">總金額 NT$ {state.total || 0}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};