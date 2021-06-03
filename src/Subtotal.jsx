import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        Subtotal ({0} items);
                        <strong>{` ${value} `}</strong>
                        <p>
                            <small className="subtotal_gift">
                                <input type="checkbox" />This order contains a gift
                            </small>

                        </p>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thoudandSeparator={true}
                prelix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
