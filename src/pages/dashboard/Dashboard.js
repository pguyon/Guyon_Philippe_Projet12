import React, {useState, useEffect} from 'react';
import './Dashboard.css'
import {useParams} from 'react-router-dom';
import {getUserInfo} from '../../components/services/Api';
import Error from '../404/Error';
import Activity from '../../components/activity/Activity';
import Loader from '../../components/loader/Loader';

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(false)
    let {id} = useParams()

    useEffect(() => {
        getUserInfo(id).then((response) => {
            return response.data
        }).then(data => {
            setUser(data)
            setIsloading(true)
        })
    }, [id])

   

    if (!isLoading) {
        return <Loader />
    } else if(user === undefined) {
        return <Error />
    } else {
        return (
            <main className="dashboard__wrapper">
                <h1>Bonjour <span>{user.userInfos['firstName']}</span></h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👋 </p>
                <Activity userId={user.id}/>
                {/* <h1>{user.keyData.calorieCount}</h1> */}
            </main>
        );
    }
}

export default Dashboard;
