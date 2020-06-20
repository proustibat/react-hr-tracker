# React Heart Rate Tracker

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<a href="https://bulma.io">
<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" height="21">
</a>
<img id="badge" src="https://david-dm.org/proustibat/react-hr-tracker.svg" alt="dependencies updates">
[![Renovate enabled](https://img.shields.io/badge/RenovateBot-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Heroku CI](https://img.shields.io/badge/Heroku%20-CI-blueviolet)](https://devcenter.heroku.com/articles/heroku-ci)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=proustibat_react-hr-tracker&metric=alert_status)](https://sonarcloud.io/dashboard?id=proustibat_react-hr-tracker)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=proustibat_react-hr-tracker&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=proustibat_react-hr-tracker)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=proustibat_react-hr-tracker&metric=code_smells)](https://sonarcloud.io/dashboard?id=proustibat_react-hr-tracker)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=proustibat_react-hr-tracker&metric=bugs)](https://sonarcloud.io/dashboard?id=proustibat_react-hr-tracker)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=proustibat_react-hr-tracker&metric=sqale_index)](https://sonarcloud.io/dashboard?id=proustibat_react-hr-tracker)

Track heart rate measurement with the [Bluetooth Web API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

App is running at [https://react-hr-tracker.herokuapp.com/](https://react-hr-tracker.herokuapp.com/)

## Prerequisites

Be sure [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are installed.
We also use [Yarn](https://classic.yarnpkg.com/), but you could use NPM instead.

## Installation

- The installation requires to be authenticated to the Font Awesome npm registry.
  As you can see in `.npmrc` file, we set a variable environment `FONTAWESOME_NPM_AUTH_TOKEN`. You can set it on deploymnet server and on you dev environmeent.
  We recommend to use [direnv](https://direnv.net/).

- In order to be available to use Web Bluetooth API on mobile in development mode, you need to browse the app with https.
  For example, add a `.env` file with `HTTPS=true`.

Then you can run `yarn` or `npm i`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Heroku deployment

- Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Login to your account and create an app.
- Use [this Heroku Buildpack](https://github.com/mars/create-react-app-buildpack)
- Don't forget to add variable environment: `heroku config:set FONTAWESOME_NPM_AUTH_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX`
- Deploy with `yarn heroku-deploy`
- Learn more about [Heroku CI](https://devcenter.heroku.com/articles/heroku-ci) in order to deploy to run tests and deploy production and staging environments automatically when pushing and making pull request on [Github](https://devcenter.heroku.com/articles/github-integration#automatic-deploys).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Other used tools:

- [Bulma documentation](https://bulma.io/documentation/).
- [Font Awesome](https://fontawesome.com/) / [Font Awesome Pro](https://fontawesome.com/pro).
- [Husky](https://github.com/typicode/husky#readme)
- [Commitizen](http://commitizen.github.io/cz-cli/) / [cz-emoji](https://github.com/ngryman/cz-emoji)
- [Prettier](https://prettier.io/) / [pretty-quick](https://github.com/azz/pretty-quick#readme)
- [Heroku](https://devcenter.heroku.com/categories/reference)
- [Sonarcloud](https://sonarcloud.io/documentation/analysis/automatic-analysis/)
