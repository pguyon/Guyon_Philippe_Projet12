import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../components/services/Api';

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        getUserInfo(id).then((response) => {
            return response.data
        }).then(data => {
            setUser(data)
            setIsloading(true)
        })
    }, [id])

    if(!isLoading){
        return <p></p>
    }else {
        return (
            <main className="dashboard__wrapper">
              <h1>Bonjour {user.userInfos['firstName']}</h1>
            </main>
        );
    }
}

export default Dashboard;
