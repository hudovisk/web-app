Workflow
========

##Git:
Git rules:
 - Anything in the master branch is deployable.
 - To work on something new, create a descriptively named branch off of master (ie: new-oauth2-scopes).
 - Commit to that branch locally and regularly push your work to the same named branch on the server.
 - When you need feedback or help, or you think the branch is ready for merging, open a pull request.
 - After someone else has reviewed and signed off on the feature, you can merge it into master.
 - Once it is merged and pushed to ‘master’, you can and should deploy immediately.

Really good article about it (must read): http://scottchacon.com/2011/08/31/github-flow.html

##Travis CI:
Whenever you commit your code travis will run all test's in a test enviromnent to guarantee that your
code doesn't brake anything.

##Grunt:
Task automator, its a tool we will use to run tests and produce minified versions of our javascript
and css. Grunt can also watch for file changes and run tasks whenever the files are changed. 
Ex: restart the server whenever we change any of the server files, so we dont have to do this ourselfs.

##Mocha, Chai, supertest, mockgoose
Mocha is the test runner while cai provide an assert library to be used with mocha. Supertest makes 
it easy to test http requests and mockgoose simulates the database in memory for testing.

##JSHint:
Static code analyzer that looks into code style and possible errors.

##Fly:
Automated deploy. video: https://www.youtube.com/watch?v=XxRuW1pfGTI&list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh&index=7

