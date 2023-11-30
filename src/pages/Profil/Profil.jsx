import { useEffect } from 'react';
import './Profil.css';

import { Account } from '../../components/Account/Account';
import accountData from '../../mock/accountData';

import { useNavigate } from 'react-router-dom';
import stockData from '../../services/stockData';

import { useDispatch, useSelector } from 'react-redux';

export default function Profil() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { firstName, lastName, isAuthenticated } = useSelector((state) => state.user);

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/login');
    //     }
    // }, [isAuthenticated, navigate]);
    const getAuth = stockData.getAuthentication();

    return (
        <>
            <main className="main bg-dark">
                <div className="header2">
                    {/* Utiliser les données du profil */}
                    <h1>Welcome back<br />{firstName} {lastName} !</h1>
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
