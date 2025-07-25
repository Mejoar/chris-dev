// API Configuration - EMERGENCY UPDATE 2025-07-25 16:47 UTC
// ABSOLUTELY FORCE PRODUCTION URL - NO LOCALHOST ALLOWED
const API_BASE_URL = 'https://chris-dev-backend.onrender.com';

// EMERGENCY DEBUG LOGS
console.log('🚨 EMERGENCY API Base URL (v3):', API_BASE_URL);
console.log('🚨 Environment Variable:', import.meta.env.VITE_API_URL);
console.log('🚨 EMERGENCY Deployment Time: 2025-07-25 16:47:04 UTC');
console.log('🚨 If you see localhost, VERCEL IS NOT UPDATED!');

// Verify no localhost anywhere
if (API_BASE_URL.includes('localhost')) {
    console.error('🚨🚨🚨 LOCALHOST DETECTED - DEPLOYMENT FAILED!');
} else {
    console.log('✅ Production URL confirmed');
}

// Export as both default and named export for flexibility
export default API_BASE_URL;
export { API_BASE_URL };
