import { useEffect, useState } from 'react';
import './Connexion.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import callsApi from '../../services/callsApi';

import stockData from '../../services/stockData';

import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/slice';

const Connexion = () => {
    // récupérer les données du formulaire
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    // version useState()
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated, navigate]);

    const submit = async (event) => {
        event.preventDefault();

        // remplacer ces lignes par des useState
        email = event.target.username.value;
        password = event.target.password.value;

        const result = await callsApi.login(email, password);

        if (result.success) {
            const token = result.token;

            // Récupérer le profil de l'utilisateur
            const res = await callsApi.getUser(token);
            if (res) {
                setEmail(email);
                setPassword(password);

                dispatch(signIn(res));
                stockData.setAuthentication(email, res.firstName, res.lastName, token);
                navigate('/profile');
            } else {
                alert('Erreur lors de la récupération du profil');
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