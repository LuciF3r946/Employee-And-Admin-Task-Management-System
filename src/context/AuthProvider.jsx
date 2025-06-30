import React, { useState, createContext, useEffect } from 'react';
import { getLoaclStorage, setLoaclStorage } from '../utils/localstorage';

export const AuthContext = createContext();

/**
 * AuthProvider - Manages authentication state and provides it to child components
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 */
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        employees: [],
        admin: []
    });

    // Initialize data from localStorage
    useEffect(() => {
        try {
            const { employees = [], admin = [] } = getLoaclStorage() || {};
            setUserData({ employees, admin });
        } catch (error) {
            console.error('Failed to load user data:', error);
            // Fallback to empty arrays if error occurs
            setUserData({ employees: [], admin: [] });
        }
    }, []);

    /**
     * Updates employees data in both state and localStorage
     * @param {Array} updatedEmployees - New employees array
     */
    const updateEmployees = (updatedEmployees) => {
        try {
            setUserData(prev => ({
                ...prev,
                employees: updatedEmployees
            }));
            setLoaclStorage('employees', updatedEmployees);
        } catch (error) {
            console.error('Failed to update employees:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            ...userData,
            updateEmployees
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;