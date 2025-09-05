import { useState,useEffect } from "react";

function useFetch(serviceFunction, ...args){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);

    useEffect(
        () => {

            const controller = new AbortController();
            const signal = controller.signal;


            const fetchData = async () => {
                setLoading(true);
                setData(null);
                setError(null);

                try {
                    const result = await serviceFunction(...args,{signal});
                    console.log('[Hook] Received result:', result);
                    setData(result);

                } catch (error) {
                    if (error.name != 'AbortError'){
                        setError(error);
                    }

                } finally {
                    if (!signal.aborted){
                        setLoading(false);
                    }

                }

            }

            fetchData();

            return () => controller.abort();





        }, [serviceFunction,JSON.stringify(args)]
    );

    return {data,loading,error};
}

export default useFetch