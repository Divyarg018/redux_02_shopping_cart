import React from "react";
import "./Auth.css";

export default function Auth() {
    return (
        <div>
            <div className="container">
                <h1>Login</h1>{" "}
                <form>
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id" id="id" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}