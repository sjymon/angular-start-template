Source base Angular

Node 18
Yarn 1.22.19

- Create new project Angular
- Create multi environments: development, staging, production
- Setup script build:
  [ ] "start:development": "ng serve --configuration=development"
  [ ] "start:staging": "ng serve --configuration=staging"
  [ ] "start:production": "ng serve --configuration=production"
  [ ] "build:development": "ng build --configuration=development"
  [ ] "build:staging": "ng build --configuration=staging"
  [ ] "build:production": "ng build --configuration=production"
- Install eslint: ng add @angular-eslint/schematics (https://dev.to/angular/angular-eslint-rules-for-keyboard-accessibility-236f)
- Install @angular/cdk
- Install @angular/material
- Install Tailwindcss: yarn add -D tailwindcss postcss autoprefixer
- Install Tailwindcss form & typography: yarn add -D @tailwindcss/forms @tailwindcss/typography
- Init Tailwindcss: npx tailwindcss init
