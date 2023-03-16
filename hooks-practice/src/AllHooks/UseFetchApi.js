import React, {useState, useEffect, useDebugValue} from 'react'

const UseFetchApi = (url = "", options = null) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
        setLoading(true);
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {

            setData(data);
            setError(null);

        })
        .catch(error => {
            setError(error);
            setData(null);
            setLoading(false);
        })
        .finally(() => setLoading(false));
     
    }, [url, options]);
    
    useDebugValue('API Fetcher');
    return { data, loading, error };
}

export default UseFetchApi