# rollup-jest-boilerplate

A really simple boilerplate to demonstrate Jest unit testing with a Rollup project.

All it does is demonstrate the ability to test a project which uses ES modules for both source and tests. Babel is used to transform test files, and Rollup is used for a build task.

I've deliberately kept this very simple, to help demonstrate the dependencies and configuration required to get basic Jest unit tests working for a project built using Rollup.

## Scripts

There are four example scripts, which can be run with Yarn or NPM:

- `build` — will do an example build into a `dist` directory
- `test` — will run all tests once, using the default Jest config
- `test:watch` — will run all tests once, and then watch for file changes
- `test:coverage` — will run all tests once, and include a coverage report

During testing, Babel will transform the original source files, providing source maps which are then used in test reports.
