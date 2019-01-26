# David Nguyen,

- Lead Engineer, Target Corp
- David.T.Nguyen@Target.com
- [@vietroadie](https://twitter.com/vietroadie)

+++

## What we are going to cover

As long as ⏳ permits

- example TodoMVC (in ReactJS)
  * web app, data store, REST calls
- basic page load test
- selector playground
- resetting state
- XHR spying and stubbing, fixtures
- maybe CI and Cypress dashboard

+++

## Time 🕰

- total workshop duration 3 hours
- short breaks after 1 hour and 2 hours

+++

Please: if you have experience with Cypress.io, help others during the workshop 🙏

+++

## Requirements

You will need:

- `git` to clone this repo
- Node v6+ to install dependencies

```text
git clone <repo url>
cd testing-workshop-cypress
npm install
```

+++

## Repo organization

- `/redux-todomvc` is a web application we are going to test
- all tests are in `cypress/integration` folder
  - there are subfolders for exercises
    - `01-basic`
    - `02-adding-items`
    - `03-selector-playground`
    - `04-reset-state`
    - etc
- keep application `todomvc` running!

Note:
We are going to keep the app running, while switching from spec to spec for each part.

+++

## `redux-todomvc`

Let us look at the application.

- `cd redux-todomvc`
- `npm start`
- `open localhost:3000`

**important** keep application running through the entire workshop!

+++

It is a regular React TodoMVC application.

![TodoMVC](todomvc/img/todomvc.png)

+++

Look at XHR when using the app

![Network](todomvc/img/network.png)

+++

Look at `todomvc/index.html`

![DOM](todomvc/img/DOM.png)

+++

Look at `todomvc/app.js`

![Application](todomvc/img/app.png)

+++

## Questions

- what happens when you add a new Todo item?
- how does it get to the server?
- where does the server save it?
- what happens on start up?

Note:
The students should open DevTools and look at XHR requests that go between the web application and the server. Also the students should find `todomvc/data.json` file with saved items.

+++
