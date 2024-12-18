import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import defaultProfileImage from "../assets/images/photo-perfil.png";
import EditPinIcon from "../assets/images/edit-pin.png";
import { Link } from "react-router-dom";
import Loader from "./Loader"; 

import Historico from "./Historico";
import InformacaoPessoal from "./InformacaoPessoal";

import "../css/Usuario.css";

const Usuario = () => {
    const [profileImagePreview, setProfileImagePreview] = useState(defaultProfileImage);
    const [userData, setUserData] = useState({
        nome: "",
        sobrenome: "",
        ddd: "",
        telefone: "",
    });
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para o Loader
    const [error, setError] = useState(null); // Estado para controle de erros
    const [activeComponent, setActiveComponent] = useState("Historico");

    const navigate = useNavigate();
    const storage = getStorage();

    const handleProfileImageChange = async (e) => {
        const file = e.target.files[0];
        if (file && user) {
            const storageRef = ref(storage, `profilePictures/${user.uid}`);
            try {
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                await updateProfile(user, {
                    photoURL: downloadURL,
                });
                setProfileImagePreview(downloadURL);
                window.location.reload(); // Atualiza a página para refletir a nova imagem
            } catch (error) {
                console.error("Erro ao atualizar foto de perfil:", error);
            }
        }
    };

    const handleGetUserData = async (uid) => {
        try {
            const response = await axios.get(`https://volun-api-eight.vercel.app/usuarios/${uid}`);
            setUserData(response.data);
            setLoading(false); // Finaliza o carregamento após obter os dados
        } catch (error) {
            setError("Erro ao buscar dados do usuário.");
            setLoading(false); // Finaliza o carregamento em caso de erro
        }
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserData((prevData) => ({
                    ...prevData,
                    email: currentUser.email,
                }));
                handleGetUserData(currentUser.uid);
                setProfileImagePreview(currentUser.photoURL || defaultProfileImage);
            }
        });

        // Timeout para evitar espera muito longa na requisição da API
        const timeout = setTimeout(() => {
            if (loading) {
                setError("A requisição demorou muito para responder. Tente novamente mais tarde.");
                setLoading(false);
            }
        }, 15000);

        return () => {
            unsubscribe();
            clearTimeout(timeout);
        };
    }, [navigate, loading]);

    // Função para alternar entre os componentes "Histórico" e "Informação Pessoal"
    const handleComponentChange = () => {
        if (activeComponent === "Historico") {
            return <Historico />;
        }
        if (activeComponent === "Informação") {
            return <InformacaoPessoal />;
        }
        return null;
    };

    // Renderiza o Loader se a página ainda estiver carregando
    if (loading) {
        return <Loader />;
    }

    // Renderiza a mensagem de erro caso ocorra
    if (error) {
        return (
            <>
                <div className="error-container">
                    <p>{error}</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="usuario-container">
                <section className="usuario-section">
                    <div className="usuario-info">
                        <div className="usuario-picture">
                            <img src={profileImagePreview} alt="Foto de Perfil" className="usuario-picture-img" />
                            <label className="usuario-edit">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfileImageChange}
                                    className="profile-picture-input"
                                    style={{ display: "none" }}
                                />
                            </label>
                        </div>
                        <div className="usuario-dados">
                            <h3>Nome: {userData.nome} {userData.sobrenome}</h3>
                            <p>Email: {user?.email}</p>
                            <p>Telefone: ({userData.ddd})-{userData.telefone}</p>
                        </div>
                    </div>
                    <div className="usuario-nav">
                        <Link to={"#"} id="historico-link" onClick={() => setActiveComponent("Historico")}>Histórico</Link>
                        <Link to={"#"} id="informacao-link" onClick={() => setActiveComponent("Informação")}>Informações Pessoais</Link>
                    </div>
                </section>
                <article className="usuario-article">
                    {handleComponentChange()}
                </article>
            </div>
        </>
    );
};

export default Usuario;
