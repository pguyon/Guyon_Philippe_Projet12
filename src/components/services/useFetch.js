import {useEffect, useState} from 'react';


const useFetch = (url) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const getUserData = async () =>{
            setLoading(true);
            try {
                const res = await url;
                setResponse(res)   
            } catch (e){
                setError(true)
                console.log(e);
            } finally {
                setLoading(false)
            }
        }
        getUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    return { response, error, loading }; 
}

export default useFetch;
