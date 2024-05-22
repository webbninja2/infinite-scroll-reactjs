# Infinite Scroll with React.js, React Query, and MUI

This project demonstrates an implementation of infinite scroll functionality using React.js, React Query, and Material-UI. The application fetches anime data from the (https://api.jikan.moe/v4/anime?) and loads more data as the user scrolls down the page. When all records are fetched, a message indicating "No more items" is displayed.

## Features

- Infinite scrolling to load more data as the user scrolls.
- Fetching data using React Query for efficient server state management.
- Styled using Material-UI for a clean and responsive UI.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 18.17.1.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/webbninja2/infinite-scroll-reactjs.git
    ```
2. Navigate to the project directory:
    ```bash
    cd infinite-scroll-reactjs
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
