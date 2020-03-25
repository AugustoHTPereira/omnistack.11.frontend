import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import api from "../../services/Api";
import "./style.css";

export default function NewIncident() {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const ongId = localStorage.getItem("x-ong_id");

    const handleCreateIncident = async (event) => {
        event.preventDefault();

        try {
            await api.post("/incidents", {
                title, description, value
            }, {
                headers: {
                    ong_id: ongId
                }
            });
            history.push("/home");
        } catch (ex) {
            alert(ex);
        }
    }

    return (

        <div className="main-newincident">
            <Header />

            <div className="new-incident-content">
                <section className="new-incident-description">
                    <h1>Novo caso</h1>

                    <p>Novos casos fazem com que pessoas entrem em contato com sua ONG para auxiliar na causa. </p>
                </section>

                <form onSubmit={handleCreateIncident}>

                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="title" id="title" className="form-control" placeholder="Título" />
                    <textarea value={description} onChange={e => setDescription(e.target.value)} style={{ marginTop: 5, minHeight: 200 }} type="text" name="title" id="title" className="form-control" placeholder="Descrição" />
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" name="value" id="value" className="form-control" placeholder="Valor em reais" />

                    <button className="button button-red">Cadastrar</button>

                </form>

            </div>

            <Link className="link-icon" to="/home">
                <FiArrowLeft size={18} color="#E02041" />
                Voltar para home
            </Link>

        </div>

    );
}