# React Heart Rate Tracker

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<a href="https://bulma.io">
<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" height="20">
</a>

Track heart rate measurement with the [Bluetooth Web API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Be sure [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are installed.
We also use [Yarn](https://classic.yarnpkg.com/), but you could use NPM instead.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Warning

- In order to be available to use Web Bluetooth API on mobile in developmeent mode, you should browsee the aopp with https. For example, add a `.env` file with `HTTPS=true`.
- As we used Font Awesome Pro, you need a `.npmrc` file with your Font Awesome token as follows:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Other used tools:

- [Bulma documentation](https://bulma.io/documentation/).
- [Font Awesome](https://fontawesome.com/) with [Font Awesome Pro](https://fontawesome.com/pro).
- [Husky](https://github.com/typicode/husky#readme)
- [Commitizen](http://commitizen.github.io/cz-cli/) with [cz-emoji](https://github.com/ngryman/cz-emoji)
- [Prettier](https://prettier.io/) with [pretty-quick](https://github.com/azz/pretty-quick#readme)
