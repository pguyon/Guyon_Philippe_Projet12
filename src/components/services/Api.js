import axios from "axios";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } from '../../data/MockData.js';



const instance = axios.create({
    baseURL: 'http://localhost:3000/user',
    method: 'GET',
  });


  let mockedDatas = null;


  export const getUserInfo = async (id) => {
    try {
      const response = await instance.get(`/${id}`);
      if (response.status === 200) {
        console.log('API working');
        mockedDatas = false;
        return response.data;
      } else {
        mockedDatas = true;
      }
    } catch (error) {
      console.log('API unavailable. Datas coming from mock.');
      mockedDatas = true;
      const mockedResponse = await USER_MAIN_DATA.filter((x) => x.id === +id);
      return {
        data: mockedResponse[0],
      };
    }
  };


  export const getUserActivity = async (id) => {
    try {
      if (mockedDatas) {
        const response = await USER_ACTIVITY.filter((x) => x.userId === +id);
        return {
          data: response[0],
        };
      } else {
        const response = await instance.get(`/${id}/activity`);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }