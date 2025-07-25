// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://chris-dev-backend.onrender.com';

// Export as both default and named export for flexibility
export default API_BASE_URL;
export { API_BASE_URL };
