# es6-sandbox
A quick place to mess around with es6 stuff.

Currently we have the following:
- Transpiling to ES5 "dist" folder (WebStorm File-Watcher based)
- DI/IoC
- TDD/BDD (Mocha based using WebStorm test runner)

TODO:
- Gulp based transpiling to ES5 "dist" folder without breaking the WebStorm File-Watcher
- Gulp or npm based execution of TDD/BDD tests in Mocha without breaking the WebStorm one
- Creating a "prod-dist" that excludes the *.spec.js files
