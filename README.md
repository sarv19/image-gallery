# Masonry Image Gallery with React-Virtualized
Preview: [Sandbox](https://codesandbox.io/p/github/sarv19/image-gallery/main?import=true)

![alt text](image.png)

Welcome to the Masonry Image Gallery project! This project showcases a highly efficient and visually appealing image gallery built using React and the powerful `react-virtualized` library. The gallery dynamically arranges images in a masonry layout, ensuring optimal performance and a seamless user experience.

## Features

- **Dynamic Masonry Layout**: Images are arranged in a Pinterest-like masonry grid, providing a visually stunning and organized display.
- **Virtualized Rendering**: Leveraging `react-virtualized`, the gallery only renders images currently in view, significantly improving performance and reducing memory usage.
- **Responsive Design**: The gallery adapts to different screen sizes, ensuring a consistent and beautiful layout on all devices.
- **Lazy Loading**: Images are loaded on demand as the user scrolls, with a small threshold to preload images ahead of time.
- **Error Handling**: Gracefully handles image load errors, ensuring a smooth user experience even when some images fail to load.
- **Skeleton Loaders**: Displays skeleton loaders while images are loading, preventing layout shifts and providing visual feedback to users.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-Virtualized**: A library for efficiently rendering large lists and tabular data.
- **Create React App**: A tool to set up a modern web app by running one command.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Future Work

- **Responsive Layout**: Enhance the gallery to be fully responsive, adapting to various screen sizes and orientations for an even better user experience.

## Contributing

You are welcomed contributions to enhance the functionality and features of this project. Feel free to open issues or submit pull requests on GitHub.


