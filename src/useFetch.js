import { useState, useEffect} from 'react';
//if loading
//if data exist
//if theres an error

export function useFetch(uri){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
        if(!uri) return;
        fetch(uri)
        .then(data =>data.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)
    }, [uri])

    return { loading, data, error, };
}