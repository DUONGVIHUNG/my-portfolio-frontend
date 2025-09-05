const API_URL = 'https://api.github.com';

export const getUserProfile= async (userName,option = {})=>{
    const response = await fetch(`${API_URL}/users/${userName}`,{...option});

    if (!response.ok){
        throw new Error(`Failed to get profile for ${userName}`);

    }
    const data = response.json();
    console.log('[Service] Data from API:', data);
    return data;
}