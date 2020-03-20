This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/bdd0f41d-e9f1-4a07-8e42-3cb2b40eaf37/deploy-status)](https://app.netlify.com/sites/zen-kalam-ccfab6/deploys)

## :satellite: This react app has two environments:

### 1. Github page & master branch [production]:

Visit: https://nancybolstad.github.io/noroff-react-ma3/

This is served from the master branch. It includes all the compulsory requirements for this module assignment.

#### Features:

- TypeScript for development and Storybook for UI testing.
- Routing with react-router-dom.
- Used react-hook-form and yup for creating a simple login form.
- Theme components via the <ThemeProvider> wrapper component, provided by Styled Components.
- Lazy load components (with react.lazy and suspense).
- Automated workflow: Github workflow and Netlify.

### 2. Netlify & staging branch [development]:

Visit: https://zen-kalam-ccfab6.netlify.com/

This is deployed from the staging branch. It includes additional features that will be included in the next release.

#### Features in the next release:

- [x] Use Fetch API service
- [x] Access local storage
- [ ] Dark/light mode toggle
- [ ] Dashboard after login
- [ ] Add 404 error page
- [ ] Jest test
- [ ] Adding Google Custom Search
- [ ] Testing SEO using Fetch as Google

## :paperclip: Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn serve`

Deploy the website on local server. Make sure that you have installed serve.
Read more about [Deployment in local environment](https://create-react-app.dev/docs/deployment/) for more information.

### `yarn storybook`

Launches the storybook UI testing in the interactive watch mode.<br />
See the section about [storybook](https://storybook.js.org/docs/basics/introduction/) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn deploy`

Deploy the app on GitHub Pages site. This requires to include information about the homepage's URL in the package.json file.

For example:
"homepage": "http://gitname.github.io/noroff-react-ma3",

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
