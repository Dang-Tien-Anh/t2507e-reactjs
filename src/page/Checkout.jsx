import { useState } from "react";

function Checkout() {
    return (
        <>
            <div className="container">
                <h1>Checkout</h1>
            </div>

            <form action="#" method="post">
                <div className="mb-3">
                    <label>Full name</label>
                    <input type="text" name="fullname" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    )
}
export default Checkout;