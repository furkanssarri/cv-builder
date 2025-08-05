# CV Builder

## Description

This project is a CV (Curriculum Vitae) builder application created with React. It allows users to dynamically create, edit, and preview a professional-looking CV. The application leverages modern web technologies to provide a seamless and interactive user experience. This project was developed as an exercise to solidify core React concepts, including state management, component-based architecture, and JSX syntax.

## Live Demo

A [live demo](https://furkanssarri-cv-builder.netlify.app/) of the application can be found here.

## Features

- **Dynamic Form Generation**: Forms for each CV section are generated dynamically based on a configuration, making the application easily extensible.
- **Live Preview**: The CV is updated in real-time as the user types, providing immediate feedback.
- **State Management**: Utilizes React's `useState` hook for efficient state management.
- **Local Storage**: Persists user data in the browser's local storage, so work is not lost between sessions.
- **Component-Based Architecture**: The application is built with reusable React components, promoting a clean and maintainable codebase.
- **Customizable Theme**: Users can change the theme color of the generated CV.
- **Load Sample Data**: Users can load sample data to quickly see the application's capabilities.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that provides a fast development experience.
- **React Icons**: A library of popular icons for React applications.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **CSS**: Custom styling for the application.

## Project Structure

```
cv-builder/
├── src/
│   ├── assets/               # Static assets like images, data, and form configurations
│   ├── components/           # React components
│   │   ├── form/               # Form-related components
│   │   └── output/             # CV output components
│   ├── utils/                # Utility functions
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── .gitignore                # Git ignore file
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/cv-builder.git
    cd cv-builder
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server and open the application in your default browser at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Previews the production build.

## License

This project is licensed under the MIT License.

## Acknowledgements

Built by [furkanssarri](https://github.com/furkanssarri) for [The Odin Project](https://www.theodinproject.com/).
