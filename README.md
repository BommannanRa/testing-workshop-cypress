# testing-workshop-cypress [![CircleCI][ci-badge]][ci-url] [![renovate-app badge][renovate-badge]][renovate-app]

> A 3-4 hour testing workshop complete with application, exercise tests and speaker slides for [Cypress.io](https://www.cypress.io/)

## Requirements ⚙️

- Any computer: Mac, Windows, Linux
- [Node 6+](https://nodejs.org/)
- [git](https://git-scm.com)

In order to get the code and install dependencies

```bash
git clone git@github.com:cypress-io/testing-workshop-cypress.git
cd testing-workshop-cypress
npm install
```

If necessary, install dependencies inside redux-todomvc folder

```bash
cd redux-todomvc
npm install
```

### Quick check ✅

You can test the installation by starting TodoMVC in the first terminal window

```shell
cd redux-todomvc
npm start
```

and you should see in the terminal

```text
> json-server --static . data.json --middlewares ./node_modules/json-server-reset


  \{^_^}/ hi!

  Loading data.json
  Loading ./node_modules/json-server-reset
  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3000
```

and from the second terminal you should be able to open Cypress with

```bash
$ npm run cy:open

> testing-workshop-cypress@1.0.0 cy:open /git/testing-workshop-cypress
> cypress open
```

## Application 💾

[ReactJS](https://reactjs.org/) + [Redux](https://redux.js.org/) + REST server application that we are going to test is in the folder `todomvc`. This application and its full testing is described in [this site](http://todomvc.com/examples/react/#/). The application should run fine without network access.

## Slides 🖥

[https://gitpitch.com/cypress-io/testing-workshop-cypress][presentation] with the starting file in [PITCHME.md](PITCHME.md) presented using [GitPitch](https://gitpitch.com/). The pitch file includes files from the [slides](slides) folder. Students should open the [presentation slides][presentation] and follow along.

[presentation]: https://gitpitch.com/davidtnguyen/testing-workshop-cypress

## Content 🗂

| topics                                 | folder                                                                                   | slides                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Introduction, TodoMVC application      | [todomvc](todomvc)                                                                       | [intro.md](slides/intro.md)                                   |
| Loading page                           | [00-start](00-start)                                                                     | [00-start.md](slides/00-start.md)                             |
| `cypress open` vs `cypress run`        | [cypress/integration/01-basic](cypress/integration/01-basic)                             | [01-basic.md](slides/01-basic.md)                             |
| Adding items test, `cypress.json` file | [cypress/integration/02-adding-items](cypress/integration/02-adding-items)               | [02-adding-items.md](slides/02-adding-items.md)               |
| Selector Playground                    | [cypress/integration/03-selector-playground](cypress/integration/03-selector-playground) | [03-selector-playground.md](slides/03-selector-playground.md) |
| Reset database using `cy.request`      | [cypress/integration/04-reset-state](cypress/integration/04-reset-state)                 | [04-reset-state.md](slides/04-reset-state.md)                 |
| Spy and stub XHR requests, fixtures    | [cypress/integration/05-xhr](cypress/integration/05-xhr)                                 | [05-xhr.md](slides/05-xhr.md)                                 |
| Access application code and data       | [cypress/integration/06-app-data-store](cypress/integration/06-app-data-store)           | [06-app-data-store.md](slides/06-app-data-store.md)           |
| Setting up E2E tests on CI             | [cypress/integration/07-ci](cypress/integration/07-ci)                                   | [07-ci.md](slides/07-ci.md)                                   |
| Setting up Cypress Dashboard           | [cypress/integration/07-ci](cypress/integration/07-ci)                                   | [08-dashboard.md](slides/08-dashboard.md)                     |
| The end                                | -                                                                                        | [end.md](slides/end.md)                                       |

## For speakers 🎙
The content has been curated to run in a 3 hours workshop. Everyone worked or coded for the most part, except for CI and the Cypress Dashboard sections, where the usage was shown via slides and actual sites.

During the workshop, keep the `redux-todomvc` app running in one shell, while each section `01-basic`, `02-...`, `03-...` etc. has its own Cypress and specs subfolders `cypress/integration/...`. Usually a spec has several tests with placeholder comments. The workshop attendees are expected to make the tests pass using the knowledge from the slides and hints (and [Cypress documentation](https://docs.cypress.io/)). Note that most folders have a prepared `spec.js` file and an `answer.js` file. The `answer.js` file is ignored by Cypress using a setting in `cypress.json`.

The only exception is the folder `00-start`. This is a folder for students to see how Cypress scaffolds example specs when you open Cypress for the very first time. In this folder students should execute...

```
cd 00-start
npm run cy:open
```

...and see the list of created example specs.

The slides can be shown directly via the [presentation link][presentation] above. The Markdown files in [slides](slides) folder also has a little bit of speaker notes.

## Additional information 🗃

- https://www.cypress.io/
- https://docs.cypress.io/
- https://docs.cypress.io/api/api/table-of-contents.html

[ci-badge]: https://circleci.com/gh/cypress-io/testing-workshop-cypress.svg?style=svg
[ci-url]: https://circleci.com/gh/cypress-io/testing-workshop-cypress
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
