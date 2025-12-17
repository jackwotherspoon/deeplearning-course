# TechStack Conference Website

## Project Overview

This is the source code for the TechStack Conference website, a modern single-page application built with React 19, TypeScript, and Vite. The application allows users to view the conference schedule, explore sessions, and get information about the event.

### Key Technologies

*   **Framework:** React 19
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4, PostCSS
*   **Routing:** React Router DOM v7
*   **Animations:** Framer Motion
*   **Testing:** Vitest, React Testing Library
*   **Icons:** Lucide React

## Architecture

The project follows a standard React application structure:

*   **`src/main.tsx`**: The application entry point. Mounts the React app to the DOM.
*   **`src/App.tsx`**: Defines the main application component, including routing configuration and the global layout. Note the use of `Suspense` and `lazy` for route code-splitting.
*   **`src/lazyLoad.ts`**: Centralizes the lazy loading logic for page components to optimize performance.
*   **`src/pages/`**: Contains the main page components (e.g., `Home.tsx`, `Catalog.tsx`, `SessionDetail.tsx`).
*   **`src/components/`**: Contains reusable UI components (e.g., `Layout.tsx`, `Loading.tsx`).
*   **`src/data/`**: Contains static data definitions and content, such as the `SESSIONS` array in `sessions.ts`.
*   **`src/assets/`**: Static assets like images and SVGs.

## Building and Running

The project uses `npm` for dependency management and scripts.

### Key Commands

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    Starts the Vite development server with Hot Module Replacement (HMR).

*   **Build for Production:**
    ```bash
    npm run build
    ```
    Compiles the TypeScript code and bundles the application for production using Vite.

*   **Run Tests:**
    ```bash
    npm run test
    ```
    Runs the test suite using Vitest.

*   **Linting:**
    ```bash
    npm run lint
    ```
    Runs ESLint to check for code style and potential errors.

*   **Preflight Check:**
    ```bash
    npm run preflight
    ```
    Runs linting, tests, and a production build to ensure the project is ready for deployment.
    Preflight should be run after a feature is fully implemented.

## Development Conventions

*   **Routing:** New pages should be added to `src/pages/` and lazy-loaded in `src/App.tsx` via `src/lazyLoad.ts`.
*   **Styling:** Use Tailwind CSS utility classes for styling. Global styles are defined in `src/index.css`.
*   **Data:** The application currently uses static data files in `src/data/` (e.g., `sessions.ts`) instead of a backend API.
*   **Testing:** Tests are generally co-located with their components (e.g., `Catalog.test.tsx` alongside `Catalog.tsx`) or placed in `src/pages/` for page-level tests.
*   **Type Safety:** Strict TypeScript mode is enabled. Ensure all components and functions are properly typed.
