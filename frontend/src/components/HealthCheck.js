import http from '../http'
import {useEffect, useState} from "react";

export default function HealthCheck() {
    const [healthCheckURL] = useState(process.env.REACT_APP_API_URL + '/health_check');
    const [message, setMessage] = useState(null);

    useEffect(() => {
        http.get(healthCheckURL)
            .then(
                (result) => setMessage('API is healthy.'),
                (error) => {
                    console.error(error)
                    setMessage('Error encountered. Is the Rails API running?.')
                }
            )
    }, [])

    return (
        <div className="text-left">
            <p>
                <a className="underline text-indigo-400" href={healthCheckURL}>{healthCheckURL}</a>
            </p>
            <p>
                Performing API health check...
            </p>
            <p>
                {message}
            </p>
        </div>
    )
}

