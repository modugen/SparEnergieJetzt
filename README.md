
# SparEnergie.Jetzt Konfigurator

[Live Version](https://sparenergie.jetzt)

__German__: 
Hier liegt der vollständige source code des Sparenergie Konfigurators. Wir hoffen mit diesem Tool einen Beitrag zur Energiekrise zu leisten. Um die bestmöglichen Vorschläge zur Verfügung stellen zu können, haben wir uns entschieden den code öffentlich zu stellen, sodass weitere Beiträge möglich sind!

# Contributing
We are encouraging contributions to this tool, since we are convinced that it can grow to help more and more people save energy in a meaningful way. 
This code was written in a 3 day company internal hackathon. Hence, don't expect architectural prowess ;) 
Any cleanups, restructuring and modularisation is welcome. Additionally there's a few bigger steps that would help the tool.

## Next Steps

* Introduce UI and calculation tests and add Github Action with test suite
* Introduce Translations using [react-i18next](https://react.i18next.com/)
* Add products (see below)
* Add additional configuration options 
	* Different heating types
	* more house types
	* ...
* Improve Cookie handling

## Introducing new Products
* The calculations for each product are written in `/src/calc.ts` 
* The products are listed in `src/pages/ResultPage/constants.ts` 
* The logic of the calculation follows a similar pattern for all products. This is explained here: **TBA**.

## Tooling
* react-snap for server-side prerendering
* zustand for the configurator store 
* MUI for UI elements
* The app is deployed on each commit to `main` via AWS Amplify.
	* Contact info@modugen.de if there's questions regarding this.

# Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Changelog

- 2022-09-17: Use correct link for shower head [(hansgrohe Crometta)](https://amzn.eu/d/2qi6eyZ) and slightly update text
- 2022-09-19: Add cold shower as result 
- 2022-09-19: Add link to [slide deck with example calculations](https://docs.google.com/presentation/d/10A2ax4ydBqMSbrEWNTQA8vuHeDKODlggO55Yvc6_A4E/edit#slide=id.p)

