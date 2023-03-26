# NgWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Steps to create this project

#### 1. Create empty angular workspace with angular CLI

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

#### 6. Uncomment following code in remote project's webpack.config.js file.

![webpack.config.js code](/projects/remote/src/assets/remote-config.png?raw=true")



## Support

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
