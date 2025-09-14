const API_URI = import.meta.env.VITE_API_URL;


export const getUser = async (id,option = {}) => {
    const response = await fetch(`${API_URI}/api/user/${id}`,{...option});

    console.log(`${API_URI}/api/user/${id}`)

    if (!response.ok){
        throw new Error('Failed to get user data');
    }

    const data = response.json()

    return data;

}