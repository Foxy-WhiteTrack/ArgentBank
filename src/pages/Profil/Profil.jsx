import { useEffect, useState } from 'react';
import './Profil.css';

import { Account } from '../../components/Account/Account';
import accountData from '../../mock/accountData';

import { useNavigate } from 'react-router-dom';
import stockData from '../../services/stockData';
import callsApi from '../../services/callsApi';

import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName } from '../../redux/slice';

export default function Profil() {

    const { firstName, lastName, isAuthenticated } = useSelector((state) => state.user);

    const [editionFirstName, setEditFirstName] = useState(firstName || "");
    const [editionLastName, setEditLastName] = useState(lastName || "");

    const [isFormDisplayed, setIsFormDisplayed] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const getAuth = stockData.getAuthentication();

    const handleChange = async (e) => {
        e.preventDefault();
        const result = await callsApi.updateUser(getAuth.token, editionFirstName, editionLastName);
        if (result) {
            console.log('success');
            setIsFormDisplayed(false);
            dispatch(setFirstName(editionFirstName));
            dispatch(setLastName(editionLastName));
        } else {
            console.error(result.message);
        }

    };

    const resetEdition = () => {
        setEditFirstName(firstName || "");
        setEditLastName(lastName || "");
    };

    return (
        <>
            <main className="main bg-dark">
                <div className="header2">
                    {/* Utiliser les données du profil */}
                    <h1>Welcome back<br />{firstName} {lastName} !</h1>
                    {isFormDisplayed ? (
                        <>
                            <form className="edit" onSubmit={handleChange}>
                                <input
                                    value={editionFirstName}
                                    onChange={(e) => setEditFirstName(e.target.value)}
                                    placeholder={firstName}
                                />
                                <input
                                    value={editionLastName}
                                    onChange={(e) => setEditLastName(e.target.value)}
                                    placeholder={lastName}
                                />
                                <button className="edit-button" type='submit'>Save</button>
                                <button className="edit-button cancel" onClick={() => { setIsFormDisplayed(false); resetEdition(); }}>Cancel</button>
                            </form>
                        </>
                    ) : (
                        <button className="edit-button" onClick={() => setIsFormDisplayed(true)}>Edit Name</button>
                    )}
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
