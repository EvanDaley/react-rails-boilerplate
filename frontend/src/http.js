import axios from 'axios'

const axiosClient = axios.create({
    transformRequest:
        [
            (data, headers) => {
                // If you add authentication, this is an easy way to make sure a token goes out with every request.
                // Object.assign(headers, {
                //     Authorization: `Bearer ${store.getters['session/getToken']}`,
                // })

                return data
            },
            ...axios.defaults.transformRequest,
        ],
})

export default axiosClient
