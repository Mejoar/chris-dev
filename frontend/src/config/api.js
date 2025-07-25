// API Configuration
// Force production URL for deployed version
const API_BASE_URL = 'https://chris-dev-backend.onrender.com';

// Debug log to check what URL is being used
console.log('🔗 API Base URL (FORCED):', API_BASE_URL);
console.log('🔗 Environment Variable:', import.meta.env.VITE_API_URL);

// Export as both default and named export for flexibility
export default API_BASE_URL;
export { API_BASE_URL };
