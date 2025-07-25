// API Configuration - Updated 2025-07-25 16:39 UTC
// Force production URL for deployed version
const API_BASE_URL = 'https://chris-dev-backend.onrender.com';

// Debug log to check what URL is being used
console.log('🔗 API Base URL (FORCED v2):', API_BASE_URL);
console.log('🔗 Environment Variable:', import.meta.env.VITE_API_URL);
console.log('🔗 Deployment Time: 2025-07-25 16:39:24 UTC');

// Export as both default and named export for flexibility
export default API_BASE_URL;
export { API_BASE_URL };
