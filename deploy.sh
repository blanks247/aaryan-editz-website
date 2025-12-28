#!/bin/bash

echo "🚀 Aaryan Editz - Quick Deployment Script"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Checking Git status...${NC}"
git status

echo ""
echo -e "${YELLOW}Do you want to create a GitHub repository? (y/n)${NC}"
read -r create_github

if [ "$create_github" = "y" ]; then
    echo ""
    echo -e "${BLUE}Please go to GitHub and create a new repository:${NC}"
    echo "1. Visit: https://github.com/new"
    echo "2. Name it: aaryan-editz-website"
    echo "3. Keep it Public"
    echo "4. DON'T add README or .gitignore"
    echo ""
    echo -e "${YELLOW}Enter your GitHub username:${NC}"
    read -r github_username
    
    echo ""
    echo -e "${BLUE}Adding GitHub remote...${NC}"
    git remote add origin "https://github.com/$github_username/aaryan-editz-website.git"
    
    echo ""
    echo -e "${BLUE}Pushing to GitHub...${NC}"
    git branch -M main
    git push -u origin main
    
    echo ""
    echo -e "${GREEN}✅ Code pushed to GitHub!${NC}"
fi

echo ""
echo -e "${YELLOW}Do you want to deploy to Vercel now? (y/n)${NC}"
read -r deploy_vercel

if [ "$deploy_vercel" = "y" ]; then
    echo ""
    echo -e "${BLUE}Deploying to Vercel...${NC}"
    echo "You'll need to login to Vercel in your browser"
    echo ""
    vercel --prod
    
    echo ""
    echo -e "${GREEN}✅ Deployment complete!${NC}"
    echo "Check the URL above to see your live website!"
else
    echo ""
    echo -e "${YELLOW}You can deploy later by running: vercel --prod${NC}"
fi

echo ""
echo -e "${GREEN}=========================================="
echo "🎉 All done! Your website is ready!"
echo "==========================================  ${NC}"
