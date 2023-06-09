# NgWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

This repository deals with simple implementation of micro-frontends in angular application using angular workspace and lazy loading micro-frontend application.

## Steps to create this project

#### 1. Create empty angular workspace using angular CLI

    ng new <workspace_name> --create-application=false

#### 2. Create shell and remote application

    ng g app shell
and 

    ng g app remote

This will create a projects folder with two applications inside it.

#### 3. Add [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation) package to shell and remote app

    ng add @angular-architects/module-federation --project=shell --port=5000

and 

    ng add @angular-architects/module-federation --project=remote --port=4000

This will create webpack.config.js file to both the applications with default configurations.

#### 4. Create a separate module in remote application with a component and setup the component's routing in the module.

#### 5. Import the module in app.module.ts file of the remote project.

#### 6. Uncomment following code in remote project's webpack.config.js file and add path to newly created module of remote project.

![webpack.config.js code](/public/remote-config.png?raw=true")

#### 7. Add routing of remote project inside app.routing-module.ts file of shell project as follows

![shell project routing code](/public/routing-of-remote.png?raw=true")

#### 8. Now, you can access remote project's component in shell project.## Support

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.