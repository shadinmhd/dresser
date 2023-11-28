import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:8000" })

Api.interceptors.request.use((request) => {

	if (localStorage.getItem("token")) {
		request.headers.Authorization = localStorage.getItem("token")
	}

	return request
})

export default Api
