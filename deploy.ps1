# Deployment script for Directory Panel
# Usage: ./deploy.ps1 "Your commit message"

$commitMessage = $args[0]
if (-not $commitMessage) {
    $commitMessage = "Update: " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
}

Write-Host "🚀 Starting Deployment..." -ForegroundColor Cyan

# Check for git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git is not installed or not in PATH."
    exit
}

Write-Host "📦 Adding changes..."
git add .

Write-Host "💾 Committing changes: '$commitMessage'..."
git commit -m $commitMessage

Write-Host "📡 Pushing to GitHub (main)..."
git push origin main

Write-Host "✅ Deployment Complete!" -ForegroundColor Green
