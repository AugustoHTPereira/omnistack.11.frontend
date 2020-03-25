import React, { useEffect, useState } from "react";

import { FiTrash2 } from "react-icons/fi";

import Header from "../../components/Header";
import api from "../../services/Api";

import "./style.css";

export default function Home() {
    const ongId = localStorage.getItem("x-ong_id");
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        try {
            api.get(`/ongs/${ongId}/incidents`).then((response) => {
                console.log("Response", response.data);

                if (response.data.length > 0) {
                    setIncidents(response.data);
                }
            });
        } catch (ex) {
            console.error(ex);
            return;
        }
    }, [ongId]);

    const handleDeleteIncident = async (id) => {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    ong_id: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id != id));
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="main-home">

            <Header />

            <section id="cases">
                <h1>Casos cadastrados</h1>

                <ul>
                    {
                        incidents.map((item) => (
                            <li id={item.id} key={item.id}>
                                <strong>{item.title}</strong>
                                <p>{item.description}</p>

                                <strong>Valor:</strong>
                                <p>{Intl.NumberFormat("pt-BR", { style: 'currency', currency: "BRL" }).format(item.value)}</p>

                                <button onClick={() => handleDeleteIncident(item.id)}>
                                    <FiTrash2 size={20} color="#aaa" />
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </div>
    );
}