# Angular2-Movie Browser - omdbAPI

This Application is built on Angular2 Framework which uses it's HTTP Client to fetch a data from a remote OMDB API. This Movie Browser is used to fetch a variety of different information about any movie you care to enter. In addition to Angular2, MovieBrowser is is built using <a href="https://getbootstrap.com" target="_blank" >
Bootstrap</a> for styling and <a href="https://daneden.github.io/animate.css/" target="_blank" >
Animate.css</a> for some cool animations.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project 

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/aanirudhraj/Angular2-MovieBrowser-OMDB-.git  my-proj
cd my-proj
```

## Install npm packages

Once you are in my-proj(for this example) directory following commands should be run to install npm.

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

Now you can Navigate to `http://localhost:3000/` on any browser, you can see my MovieBrowser application loads. if you make any changes to my source code saving the code will automatically load the application to browser. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
