import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi';

import "./style.css";

import logoimg from "../../assets/logo.svg";

import api from "../../services/Api";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    const handleRegister = async (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            phone,
            city,
            uf
        }

        try {
            const response = await api.post("/ongs", data);

            alert(`Seu ID de acesso: ${response.data.login}`);

            history.push("/logon");
        } catch (ex) {
            alert("Erro ao cadastrar, tente novamente!");
        }


    }

    return (
        <div className="main-register">
            <section className="register-section">

                <img src={logoimg} alt="Logo" />

                <h1>Cadastro</h1>

                <p>Faça cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="link-icon" to="/logon"><FiArrowLeft size={16} color="#E02041" />Já tenho uma conta</Link>
            </section>

            <form onSubmit={handleRegister} className="register-form">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nome"
                    className="form-control"
                    type="text"
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control"
                    type="email"
                />
                <input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Telefone"
                    className="form-control"
                    type="phone"
                />
                <div className="form-group">
                    <input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="Cidade"
                        className="form-control"
                        type="text"
                    />

                    <input
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        placeholder="UF"
                        style={{ width: 80, textAlign: "center" }}
                        className="form-control"
                        type="text"
                    />
                </div>
                <button className="button button-red">Cadastrar</button>

            </form>
        </div>
    );
}