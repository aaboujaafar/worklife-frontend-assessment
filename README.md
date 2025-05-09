## Overview
This project is a technical assessment for a position at Worklife as a Front End developer.
It is Vue 3 web application that utilizes modern front-end development tools and practices. It includes reusable components, SCSS styling, and API integration using Axios.

## Features
- **Reusable Components**: Modular and reusable Vue components such as `Tile`, `Icon`, and `Image`.
- **SCSS Styling**: Scoped and global SCSS styles for better maintainability.
- **API Integration**: Axios is used for making HTTP requests with a centralized configuration.


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
The app will be running at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Configuration

- **Environment Variables**: Configure environment variables in `.env` files for different environments (development, production) by replacing API_KEY with your actual API key.


## Usage
### Components
- **Tile Component**: Displays an image with a title and description.
- **Icon Component**: Renders an icon with customizable size and color.

### API Service
The Axios instance is pre-configured in `src/services/api.js` for making HTTP requests:
```javascript
import api from '@/services/api'

api.get('/endpoint').then(response => {
  console.log(response.data)
})
```