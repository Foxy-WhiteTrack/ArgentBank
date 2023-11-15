import React from 'react';
import './Connexion.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import callsApi from '../../services/callsApi';
import { setFirstName, setLastName, signIn, signOut } from '../../redux/slice';

const Connexion = () => {
    // récupérer les données du formulaire
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        const email = event.target.username.value;
        const password = event.target.password.value;

        const result = await callsApi.login(email, password);
        if (result.success) {
            const token = result.token;
            dispatch(signIn(email));

            // Récupérer le profil de l'utilisateur
            const res = await callsApi.getProfile(token);
            if (res) {
                dispatch(setFirstName(res.firstName));
                dispatch(setLastName(res.lastName));
                dispatch(signIn(email));
                navigate('/profile');
            } else {
                alert('Erreur lors de la récupération du profil');
            }

            if (submit) {
                dispatch(setFirstName(res.firstName));
                dispatch(setLastName(res.lastName));


                // localStorageService.setAuthData(email, token, res.firstName, profileResult.lastName);
                navigate('/profile');
            }
        } else {
            alert(result.message);
        }
    };
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* Lance la fonction au submit (bouton cliqué) */}
                <form onSubmit={submit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Connexion;