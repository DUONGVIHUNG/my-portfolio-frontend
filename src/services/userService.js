const API_URI = import.meta.env.VITE_API_URL;


export const getUser = async (option = {}) => {
    const response = await fetch(`${API_URI}/api/user`,{...option});

    if (!response.ok){
        throw new Error('Failed to get user data');
    }

    const data = response.json()

    return data;

}