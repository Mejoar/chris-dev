# Render Deployment Script for Chris Dev Backend
# Run this script after getting your API key from: https://dashboard.render.com/account/api-keys

param(
    [Parameter(Mandatory=$true)]
    [string]$ApiKey
)

Write-Host "🚀 Starting Render Deployment..." -ForegroundColor Green

# Set API key
$headers = @{
    "Authorization" = "Bearer $ApiKey"
    "Content-Type" = "application/json"
}

# Service configuration
$serviceConfig = @{
    type = "web_service"
    name = "chris-dev-backend"
    repo = "https://github.com/Mejoar/chris-dev.git"
    branch = "main"
    buildCommand = "npm install"
    startCommand = "npm start"
    plan = "free"
    env = "node"
    envVars = @(
        @{ key = "NODE_ENV"; value = "production" }
        @{ key = "PORT"; value = "10000" }
        @{ key = "MONGO_URI"; value = "mongodb+srv://chrisdev:Chris@12!!@cluster2.swvvac3.mongodb.net/chrisdev-blog" }
        @{ key = "JWT_SECRET"; value = "05b0d9769ccd7a3c6281644658ff18d0c6ec2ee96f248ab6b2f784662f423f57881972617dea42798b0dba97a370b6c9cc304babc25abd4a49251233aaa1cf77" }
    )
} | ConvertTo-Json -Depth 3

try {
    Write-Host "📡 Creating service on Render..." -ForegroundColor Yellow
    
    $response = Invoke-RestMethod -Uri "https://api.render.com/v1/services" `
        -Method POST `
        -Headers $headers `
        -Body $serviceConfig
    
    Write-Host "✅ Service created successfully!" -ForegroundColor Green
    Write-Host "🌐 Service URL: https://$($response.service.name).onrender.com" -ForegroundColor Cyan
    Write-Host "📊 Dashboard: https://dashboard.render.com/web/$($response.service.id)" -ForegroundColor Cyan
    
    Write-Host "⏳ Deployment in progress..." -ForegroundColor Yellow
    Write-Host "💡 Check deployment status at: https://dashboard.render.com" -ForegroundColor Blue
    
} catch {
    Write-Host "❌ Deployment failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Make sure your API key is correct and try again." -ForegroundColor Yellow
}

Write-Host "🎉 Deployment script completed!" -ForegroundColor Green
