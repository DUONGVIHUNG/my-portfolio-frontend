const API_URL = import.meta.env.VITE_API_URL;

export const downloadCvService = ({fileName}) => {
    return `${API_URL}/api/download/${fileName}`;
}