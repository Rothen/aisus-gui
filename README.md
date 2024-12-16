# Gui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Download Current API Documentation

Run the following command to download the current API documentation JSON file (AISUS Flask Server must be running):
```bash
npm run download-openapi
```
This command stores the information in the file `aisus-openapi.json`.

## Generate API Services

Run the following command to generate all API services from the downloaded API documentation JSON file:
```bash
npm run gs
```
The generated services and interfaces will be stored in the folder `src/app/modules/openapi` and get loaded by the application module `/src/app/app.module.ts`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
