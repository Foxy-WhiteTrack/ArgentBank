import React from 'react';
import './Profil.css';

import { Account } from '../../components/Account/Account';
import accountData from '../../mock/accountData';

import { useSelector } from 'react-redux';
import UserSelectors from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';

export default function Profil() {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    // extraire le profil utilisateur depuis l'état Redux
    const userProfile = useSelector((state) => state.user);

    const navigate = useNavigate();

    if (!isAuthenticated) {
        // Redirection si non connecté
        navigate('/login');
    }

    return (
        <>
            <main className="main bg-dark">
                <div className="header2">
                    {/* Utiliser les données du profil */}
                    <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName} !</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>

                {accountData.map((userAccount) => (
                    <Account
                        key={userAccount.id}
                        title={userAccount.title}
                        amount={userAccount.amount}
                        description={userAccount.description}
                    />
                ))}


            </main>
        </>
    );
}
