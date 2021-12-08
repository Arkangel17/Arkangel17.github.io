1. npm install gh-pages --save-dev
2. add this to scripts: {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
3. add to package.json {
    "homepage": "https://archengel.dev/", 
    "version": "0.1.0"
    }
4. 

