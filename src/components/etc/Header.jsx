import React, { useState, useEffect } from 'react';
import { getLoaclStorage } from '../../utils/localstorage';

const Header = ({ changeUser, data }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!data) {
            const storage = getLoaclStorage();
            if (storage?.admin?.length > 0) {
                setUsername(storage.admin[0].firstname);
            } else {
                setUsername('Admin');
            }
        } else {
            setUsername(data.firstname);
        }
    }, [data]);

    const logOutUser = () => {
        localStorage.removeItem('loggedInUser');
        changeUser(null);
    };

    return (
        <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-cyan-300 mb-8">
            <h1 className="text-2xl font-semibold text-cyan-800 leading-tight">
                Welcome, <br />
                <span className="text-cyan-600">{username}</span>
            </h1>
            
            <button 
                onClick={logOutUser} 
                className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition"
            >
                Log out
            </button>
        </div>
    );
};

export default Header;