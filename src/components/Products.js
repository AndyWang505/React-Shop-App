import { useContext } from "react";
import ProductsData from "../assets/ProductsData";
import { CartContext } from "../store";
import { type } from "@testing-library/user-event/dist/type";

export default function Products() {
    const [state, dispatch] = useContext(CartContext);

    return (
        <div className="row row-cols-3 g-3">
            {ProductsData.map((product) => {
                return (
                    <div className="col" key={product.id}>
                        <div className="card">
                            <div className="img-content">
                                <img src={product.img} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {product.title}
                                    <span className="float-end">NT$ {product.price}</span>
                                </h6>
                                <select name="" id="" className="form-select" value={product.quantity}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const quantity = parseInt(e.target.value);
                                        dispatch({
                                            type: 'CHANGE_PRODUCTS_QUANTITY',
                                            payload: {
                                                ...product,
                                                quantity
                                            }
                                        })
                                    }}>
                                    {[...Array(20)].map((_, i) => {
                                        return (
                                            <option value={i+1} key={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                <button type="button" className="btn btn-outline-primary w-100"
                                    onClick={(e) => {
                                        const quantity = parseInt(e.target.previousSibling.value)
                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                ...product,
                                                quantity
                                            }
                                        });
                                    }}>
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};