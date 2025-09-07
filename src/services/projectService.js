const API_URL = import.meta.env.VITE_API_URL;

export const getProject = async (userID,options = {}) => {

    const response = await fetch(`${API_URL}/api/project/${userID}`,{...options});

    console.log(`${API_URL}/api/project/${userID}`)

    if(!response.ok){
        throw new Error(`Failed get project data from ${userID}`);
    }

    const data = response.json();
    return data;

}
