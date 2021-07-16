**Framework Setup:**

**Softwares:** node, vscode, chrome browser, firefox browser

**VS Code plugins:**
    - Cucumber (Gherkin) Full Support Plugin
    - Markdown All in One
    - Markdown Preview Enhanced

**Instructions:**
1. Clone the code into your local
2. Run `npm install` command in your root project directory to install all the dependencies/packages

**Running the tests:**
1. Cucumber BDD tests are run in sequential and parallel mode. Parallel testing is achievied by configuring the maxNumberOfInstances and --parallel node process argument.
2. To run the tests in sequential mode set maxNumberOfInstances to 1 in your wdio.conf.js file and run the following command.
`npx wdio run wdio.conf.js`
3. To run the tests in parallel mode set the maxNumberOfInstances to greater than 1 based on your hardware spec and run the following command.
`npx wdio run wdio.conf.js --parallel=true`

**Reports of the Tests:**
1. Reports will be generated at the below location:
`root/tests/reports`

**Context Sharing:**
WebdriverIO allows context sharing/data sharing among the step definitions using the *shared-store* service.
1. To enable the shared-store service, simply add the service name (shared-store) in the services attribute of wdio.conf.js file.
2. To store the data in a step definition use the set method defined in the sharedStore object as follows
    `browser.sharedStore.set('key', 'value')`
3. The stored data can be retrieved into another step definition declared in another js file as follows.
    `browser.sharedStore.get('key')`

**Docker based testing:**
1. Tests can  be run inside the docker container to allow the integration of automated test pack with the Continuous Integration and Continuouis deployment systems such as Azure CI/CD, Jenkins, Travis, Bamboo, etc.,
2. The test framework can be made ready by building a docker image as follows
    `docker build -t testframework .`
3. Once the docker image is built, you can run the built image as follows
    `docker run testframework`

**Note:**
Assertions are implemented using chai library
https://www.chaijs.com/api/bdd/
