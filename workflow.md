Workflow
========

**Any feedback is wellcome**

##1.Taiga:
Choose a feature/task (based on the sprint plan and priority) from kanban, assign it to yourself 
and move it to the in progress tab.

##2.Git:
After selecting the feature/task from taiga you have to create a new branch from the master brach.
 
 - Make sure you are on the master brach:
```Shell
    git checkout master
```

 - Create the new branch and checkout into it:

> **recommendation:** Use the task number in taiga as part of the name of the brach

```Shell
    git checkout -b "13-user register"
```

##3.Coding:
> **Note:** This section is more focused on backend development.

After you have your git branch setup you can start coding. Here are some recomendations:
 1. Before implementing the feature think of how you can test it.

>Ex: User register:
> 1. Should validate the fields received by the post method.
> 2. Should return the registered user as a JSON response.

 2. Implement those tests and watch them fail.
  - Check my sample code to an example: https://github.com/hudovisk/web-app

 3. Implement the feature and make sure the tests succeed.

> **Note:** Whenever you push your commit to github, Travis-CI will run your tests remotely 
> so you can be sure that your code will run in the production server and not only your local enviromnent.
> To also run the tests locally use:
> ```Shell
>   grunt test
> ```

##4.Pull requests
Whenever you fill stuck with your code and need help with it or you fill that your code is tested and
ready to be in production you make a pull request and mension someone else to review your code and 
test it locally. Make sure to move the corresponding task in taigo to the ready to test tab.

###Reviwer:
 - Look through the unified diff and give feedback about the code in the pull request discussion.

 - Check Travis CI results.

 - Save any changes you are working on your current branch before checking out other people branch:
 ```Shell
    git commit -m"message"
 ```

 - Checkout to the branch of the pull request:
 ```Shell
    git checkout "13-user register"
 ```

 - Run it locally:
 ```Shell
    npm install
    npm test
    npm start
 ```

 - If everything is ok, merge it with the master branch.
```Shell
    git checkout master
    git pull origin master
    git merge "13-user register"
    git push origin master
```

 - Move the corresponding task on taiga to done tab.

>**Note:** I am working in a way to automatically deploy the app whenver a push is made to master.
> So we can deploy many times a day and have immediate feedback from the production version.
> This should be implemented by next week and will work transparent for the team.

>**Note:** I am also working in integrating the minify phase of the javascript and css files to use
> in the production version.


Tools used
==========

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
Whenever you push your code travis will run all test's in a test enviromnent to guarantee that your
code doesn't brake anything.

##Grunt:
Task automator, its a tool we will use to run tests and produce minified versions of our javascript
and css. Grunt can also watch for file changes and run tasks whenever the files are changed. 
Ex: restart the server whenever we change any of the server files, so we dont have to do this ourselfs.

##Test Framework
###Mocha, Chai, supertest, mockgoose
Mocha is the test runner while cai provide an assert library to be used with mocha. Supertest makes 
it easy to test http requests and mockgoose simulates the database in memory for testing.

###JSHint:
Static code analyzer that looks into code style and possible errors.

##Fly or Github Webhooks:
Automated deploy. video: https://www.youtube.com/watch?v=XxRuW1pfGTI&list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh&index=7

