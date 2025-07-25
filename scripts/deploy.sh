#!/bin/bash

# Chris Dev Blog Deployment Script

echo "🚀 Starting Chris Dev Blog Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Not in the correct directory. Please run from the project root."
    exit 1
fi

print_status "Checking dependencies..."

# Install backend dependencies
print_status "Installing backend dependencies..."
npm install

# Install frontend dependencies
print_status "Installing frontend dependencies..."
cd frontend && npm install

# Build frontend for production
print_status "Building frontend for production..."
npm run build

# Go back to root
cd ..

# Run tests (if available)
print_status "Running tests..."
cd frontend && npm run test -- --run
cd ..

print_status "✅ Build completed successfully!"
print_warning "Next steps:"
echo "1. Push your code to GitHub"
echo "2. Deploy backend to Render"
echo "3. Deploy frontend to Netlify"
echo "4. Configure environment variables"
echo ""
print_status "For detailed instructions, see DEPLOYMENT.md"
