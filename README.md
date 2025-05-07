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
"C:\Program Files\nodejs\node.exe" "G:\battery-tech-folio-2025\node_modules\vite\bin\vite.js" --port 8080 --host localhost
```

(Replace G:\battery-tech-folio-2025 with your actual workspace path)

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

## Troubleshooting

If you encounter issues:

1. Make sure Node.js is installed and properly configured
2. Check that the path to Node.js in run-portfolio.bat matches your actual Node.js installation
3. If the batch file doesn't work, try the manual start command

## License

This project is licensed under the MIT License - see the LICENSE file for details.
