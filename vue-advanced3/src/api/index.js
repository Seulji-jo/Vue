import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0',
};

// 2. API 함수들을 정리
async function fetchDatas(menu) {
	try {
		return await axios.get(`${config.baseUrl}/${menu}/1.json`);
	} catch (error) {
		console.log(error);
	}
}

function fetchNewsList() {
	return axios.get(`${config.baseUrl}/news/1.json`);
}
async function fetchAskList() {
	try {
		return await axios.get(`${config.baseUrl}/ask/1.json`);
	} catch (error) {
		console.log(error);
	}
}
function fetchJobsList() {
	return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchUserInfo(userName) {
	return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchItemData(itemId) {
	return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
	fetchDatas,
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchUserInfo,
	fetchItemData,
};