// @ts-check
import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/MockData";

/**
 * creation of all the queries necessary to retrieve the data
 */

/* Creating an instance of axios with the baseURL and method. */
const instance = axios.create({
  baseURL: "http://localhost:3000/user",
  method: "GET",
});

let mockDatas = null;

/**
 * creation of a query to retrieve the general information of the user
 * If the API is available, return the data from the API, otherwise return the data from the mock.
 * @type {function}
 * @param {number} id - the id of the user
 * @returns {Promise<Object>} The response from the API or the mock data.
 * @author Philippe Guyon
 * @version 1.0
 */
export const getUserInfo = async (id) => {
  try {
    const response = await instance.get(`/${id}`);
    if (response.status === 200) {
      console.log("API working");
      mockDatas = false;
      return response.data;
    } else {
      mockDatas = true;
    }
  } catch (error) {
    console.log("API unavailable. Datas coming from mock.");
    mockDatas = true;
    const mockResponse = USER_MAIN_DATA.filter((x) => x.id === +id);
    return { data: mockResponse[0] };
  }
};

/**
 * creation of a query to retrieve the activity of the user
 * It's an async function that returns a response from an API call or a mock data if the API call fails
 * @type {function}
 * @param {number} id - the user id
 * @returns {Promise<Object>} - The response object is being returned.
 * @author Philippe Guyon
 * @version 1.0
 */
export const getUserActivity = async (id) => {
  try {
    const response = await instance.get(`/${id}/activity`);
    if (response.status === 200) {
      mockDatas = false;
      return response.data;
    } else {
      mockDatas = true;
    }
  } catch (error) {
    console.log("API unavailable. Datas coming from mock.");

    if (mockDatas) {
      const response = USER_ACTIVITY.filter((x) => x.userId === +id);
      return { data: response[0] };
    }
  }
};

/**
 * @type {function}
 * @param {number} id - the user id
 * @returns {Promise<Object>} - The response object is being returned.
 * @author Philippe Guyon
 * @version 1.0
 */
export const getUserAverage = async (id) => {
  try {
    const response = await instance.get(`/${id}/average-sessions`);
    if (response.status === 200) {
      mockDatas = false;
      return response.data;
    } else {
      mockDatas = true;
    }
  } catch (error) {
    console.log("API unavailable. Datas coming from mock.");
    if (mockDatas) {
      const response = USER_AVERAGE_SESSIONS.filter((x) => x.userId === +id);
      return {
        data: response[0],
      };
    }
  }
};

/**
 * It's an async function that returns a response from an API call or a mock data if the API call
 * fails.
 * @type {function}
 * @param {number} id - the user id
 * @returns {Promise<Object>} - The response object is being returned.
 * @author Philippe Guyon
 * @version 1.0
 */
export const getUserPerformance = async (id) => {
  try {
    const response = await instance.get(`/${id}/performance`);
    if (response.status === 200) {
      mockDatas = false;
      return response.data;
    } else {
      mockDatas = true;
    }
  } catch (error) {
    console.log("API unavailable. Datas coming from mock.");
    if (mockDatas) {
      const response = USER_PERFORMANCE.filter((x) => x.userId === +id);
      return {
        data: response[0],
      };
    }
  }
};
