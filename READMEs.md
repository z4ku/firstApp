# Getting started

#### 1.Picked the application

If you picked the application from [Bitbucket](https://bitbucket.pgs-soft.com/scm/pnp/pgs-testme-fe.git)

#### 2. Install python 2.7

install python from [python 2.7](https://www.python.org/download/releases/2.7/)

#### 3. Install Dependencies

```
$ npm install 
```

#### 4. Install angular-animation
```
$ bower install angular-animate
```

#### 5. Run App
```
$ gulp serve
```
Now browse to the app at [http://localhost:3000/#/](http://localhost:3000/#/)

#### Testing
There are two kinds of tests in the angular-seed application: Unit tests and end-to-end tests.

#### Running Unit Tests
The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `...-test.js`.

For the run test
```
gulp test
```

#### End to end testing
```
$ gulp protractor
```
This script will execute the end-to-end tests against the application being hosted on the development server.
If JDK is not already installed, you can download it [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
