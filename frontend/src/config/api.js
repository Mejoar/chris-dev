// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Export as both default and named export for flexibility
export default API_BASE_URL;
export { API_BASE_URL };
