import axios from "axios";
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../data/MockData.js';


const instance = axios.create({baseURL: 'http://localhost:3000/user', method: 'GET'});


let mockDatas = null;


export const getUserInfo = async (id) => {
    try {
        const response = await instance.get(`/${id}`);
        if (response.status === 200) {
            console.log('API working');
            mockDatas = false;
            return response.data;
        } else {
            mockDatas = true;
        }
    } catch (error) {
        console.log('API unavailable. Datas coming from mock.');
        mockDatas = true;
        const mockResponse = USER_MAIN_DATA.filter((x) => x.id === +id);
        return {data: mockResponse[0]};
    }
};




export const getUserActivity = async (id) => {
    try {
        const response = await instance.get(`/${id}/activity`);
        if (response.status === 200) {
            mockDatas = false
            return response.data;
        } else {
            mockDatas = true;
        }
    } catch (error) {
        console.log('API unavailable. Datas coming from mock.');

        if (mockDatas) {
            const response = USER_ACTIVITY.filter((x) => x.userId === +id);
            return {data: response[0]}
        }
    }
}



export const getUserAverage = async (id) => {
    try {
        const response = instance.get(`/${id}/average-sessions`);
        if(response.status === 200) {
            mockDatas = false
            return response.data;
        } else {
            mockDatas = true
        }
    } catch (error) {
        console.log('API unavailable. Datas coming from mock.');
        if(mockDatas){
            const response = USER_AVERAGE_SESSIONS.filter((x) => x.userId === +id);
            return {
                data: response[0]
            }
        }
    }
}



export const getUserPerformence = async (id) => {
    try {
        const response = instance.get(`/${id}/performence`);
        if(response.status === 200) {
            mockDatas = false;
            return response.data;
        } else {
            mockDatas = true;
        }
    } catch (error) {
        console.log('API unavailable. Datas coming from mock.');
        if(mockDatas){
            const response = USER_PERFORMANCE.filter((x) => x.userId === +id);
            return {
                data: response[0]
            }
        }
    }
}