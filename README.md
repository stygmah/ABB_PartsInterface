

# React Feature Simulator

This project is a simple simulation of features and their data, created using React and TypeScript.

## Getting Started

To get started, clone the repository and install the dependencies with npm:


```
git clone https://github.com/stygmah/ABB_PartsInterface
cd ABB_PartsInterface
npm install
```

Once the dependencies are installed, you can start the project by running:

```npm run start```


This will start a development server and open the application in your default web browser.

## Project Structure

The project was created using `create-react-app` and adding typescript support.

The main component is `App` which renders the `Part` component. The `Part` component receives `features` and `partName` as props and renders the `Feature` component for each feature in the array.

The `Feature` component receives `data`, `featureName`, and `quality` as props and displays the feature data in a table.

The `App` component simulates the updating of the data in each feature by using `setInterval` in a `useEffect` hook. The `updateFeatures` function is called every 10 seconds, which updates the data and quality of each feature.

## Next Steps

- One of the next steps would be to fit all the features perfectly in a grid. For that, a function could be created to calculate the length of each feature and use a grid layout. 
- Additionally, the styled components could be updated accordingly to make sure that they are aligned correctly and the display is optimized.
- Update the quality symbols with provided ones that fit.

