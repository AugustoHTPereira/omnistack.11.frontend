import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import api from "../../services/Api";

import herosimg from "../../assets/heroes.png";
import logoimg from "../../assets/logo.svg";

import "./style.css";

export default function Logon() {

    const history = useHistory();

    const [id, setId] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post("/auth", { id })
            
            localStorage.setItem("x-ong_id", response.data.ong.id);
            localStorage.setItem("x-ong_name", response.data.ong.name);
            localStorage.setItem("x-ong_email", response.data.ong.email);
            console.log(response.data.incidents.length, response.data.incidents);
            if (response.data.incidents.length > 0)
                history.push("/home");
            else history.push("/incident/new");
        } catch (ex) {
            alert(`Erro ao tentar realizar o logon, tente novamente! ${ex}`);
        }

    }

    return (
        <div className="main-logon">

            <section className="login-form">
                <img src={logoimg} alt="Logo" />

                <form onSubmit={handleLogin}>

                    <h1>Faça seu logon</h1>

                    <input value={id} onChange={e => setId(e.target.value)} className="form-control" type="text" name="id" id="id" placeholder="Sua ID" />
                    <button className="button button-red" type="submit">Entrar</button>
                    <Link className="link-icon" to="/register"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>

                </form>
            </section>

            <img src={herosimg} alt="Heros" />

        </div>
    );
}