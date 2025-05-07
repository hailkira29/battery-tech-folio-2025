# Battery Tech Portfolio

This repository contains the Battery Tech Portfolio website showcasing my skills and projects in battery technology.

## Running the Application

### Starting the Portfolio
To start the portfolio site:
```
run-portfolio.bat
```

This will start the main portfolio at http://localhost:8080

### Manual Start
If the batch file doesn't work, you can manually start the application:

```
"C:\Program Files\nodejs\node.exe" ".\node_modules\vite\bin\vite.js" --port 8080 --host localhost
```

(Use the current directory path to the vite.js file)

## Project Structure

- `/` - Main portfolio website
- `/public` - Static files
- `/src` - Source code

## Technologies Used

- React
- TypeScript
- Node.js
- Vite (for development server)
- TailwindCSS (for styling)

## Optimization

This portfolio has been optimized for performance:
- Reduced dependency footprint by removing unused libraries
- Configured Vite for faster builds with manual chunking
- Setup for production with console log removal

## GitHub Pages Deployment

To deploy this portfolio to GitHub Pages:

1. Build the production version:
```
npm run build
```

2. The output will be in the `dist` directory.

3. Configure GitHub Pages:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select the branch to deploy (usually main or gh-pages)
   - Set the folder to `/dist`
   - Click "Save"

4. Alternatively, you can use GitHub Actions for automatic deployment:
   - Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

## Troubleshooting

If you encounter issues:

1. Make sure Node.js is installed and properly configured
2. Check that the path to Node.js in run-portfolio.bat matches your actual Node.js installation
3. If the batch file doesn't work, try the manual start command

## License

This project is licensed under the MIT License - see the LICENSE file for details.
