import React from "react";

import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logoimg from "../../assets/logo.svg";

import "./style.css";

export default function Header() {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("x-ong_id");
        localStorage.removeItem("x-ong_name");
        localStorage.removeItem("x-ong_email");
        history.push("/logon");
    }

    return (
        <header className="main-header">

            <img src={logoimg} alt="Be the hero logo"></img>

            <p>Bem vindo(a) {localStorage.getItem("x-ong_name")}!</p>

            <Link to="/incident/new" className="button button-red">Novo caso</Link>

            <button onClick={logout} ><FiPower size={22} color="#E02041" /></button>

        </header>
    );
}