import axios from 'axios';
import promise from 'promise';
import dataService from './data-service';
import appConstants from '../constants/appConstants';

import { NotificationManager } from 'react-notifications';

// Add a request interceptor 
const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(async (config) => {
	const accessToken = dataService.getItem( appConstants.APP_ACCESS_TOKEN)
	config.headers['Authorization'] = 'Bearer ' + accessToken;

	return config;
}, function (error) {
	NotificationManager.warning( "Request failed", error, 2000);
	return promise.reject(error);
});

export default AxiosInstance;
