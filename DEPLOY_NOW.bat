@echo off
echo ========================================
echo   Valentine Website - Deploy to Vercel
echo ========================================
echo.
echo Step 1: Login to Vercel
echo.
vercel login
echo.
echo Step 2: Deploy to Production
echo.
vercel --prod --yes
echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
pause
