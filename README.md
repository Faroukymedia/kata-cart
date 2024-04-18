# KataCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project architecture
```
angular-scss-start
├─ 📁src
│  ├─ 📁app
│  │  ├─ 📁cart
│  │  │  ├─ components
│  │  │  │  ├─ 📄cart.components.html
│  │  │  │  ├─ 📄cart.components.scss
│  │  │  │  ├─ 📄cart.components.spec.ts
│  │  │  │  └─ 📄cart.components.ts
│  │  │  ├─ 📁pipes
│  │  │  │  ├─ 📄total-price.pipe.spec.ts
│  │  │  │  └─ 📄total-price.pipe.ts
│  │  │  ├─ 📄cart-routing.module.ts
│  │  │  └─ 📄cart.module.ts
│  │  ├─ 📁products
│  │  │  ├─ 📁components
│  │  │  │  └─ 📁products
│  │  │  │     ├─ 📄products.component.html
│  │  │  │     ├─ 📄products.component.scss
│  │  │  │     ├─ 📄products.component.spec.ts
│  │  │  │     └─ 📄products.component.ts
│  │  │  │  └─ 📁product
│  │  │  │     ├─ 📄product.component.html
│  │  │  │     ├─ 📄product.component.scss
│  │  │  │     ├─ 📄product.component.spec.ts
│  │  │  │     └─ 📄product.component.ts
│  │  │  ├─ 📁constants
│  │  │  │  └─ 📄product.constant.ts
│  │  │  ├─ 📁models
│  │  │  │  └─ 📄add-cart.models.ts
│  │  │  ├─ 📁pipes
│  │  │  │  ├─ 📄filter-product.pipe.spec.ts
│  │  │  │  ├─ 📄filter-product.pipe.ts
│  │  │  │  ├─ 📄price-tax.pipe.ts
│  │  │  │  ├─ 📄unique-categories.pipe.spec.ts
│  │  │  │  └─ 📄unique-categories.pipe.ts
│  │  │  └─ 📄products.module.ts
│  │  ├─ 📁shared
│  │  │  ├─ 📁components
│  │  │  │  └─ 📁products
│  │  │  │     ├─ 📄not-found.component.html
│  │  │  │     ├─ 📄not-found.component.scss
│  │  │  │     ├─ 📄not-found.component.spec.ts
│  │  │  │     └─ 📄not-found.component.ts
│  │  │  ├─ 📁enums
│  │  │  │  └─ 📄category-tax.enum.ts
│  │  │  ├─ 📁models
│  │  │  │  └─ 📄product.models.ts
│  │  │  ├─ 📁services
│  │  │  │  ├─ 📄cart.service.spec.ts
│  │  │  │  ├─ 📄cart.service.ts
│  │  │  │  ├─ 📄products.service.spec.ts
│  │  │  │  └─ 📄products.service.ts
│  │  │  ├─ 📁utils
│  │  │  │  ├─ 📄tax.spec.ts
│  │  │  │  └─ 📄tax.ts
│  │  │  └─ 📄shared.module.ts
│  │  ├─ 📄app-routing.module.ts
│  │  ├─ 📄app.component.html
│  │  ├─ 📄app.component.scss
│  │  ├─ 📄app.component.spec.ts
│  │  ├─ 📄app.component.ts
│  │  ├─ 📄app.module.ts
│  │  └─ 📄constants.ts
│  ├─ 📁assets
│  │  ├─ 📄.gitkeep
│  │  └─ 📄products.json
│  ├─ 📁environments 
│  │  ├─ 📄environment.prod.ts
│  │  └─ 📄environment.ts
│  ├─ 📁mocks 
│  │  ├─ 📄mock-cart.ts
│  │  └─ 📄mock-products.ts
│  ├─ 📁styles
│  │  ├─ 📄_breakpoint.scss
│  │  ├─ 📄_colors.scss
│  │  ├─ 📄_mixins.scss
│  │  ├─ 📄_variables.scss
│  │  └─ 📄_styles.scss
│  ├─ 📄favicon.ico
│  ├─ 📄index.html
│  ├─ 📄main.ts
├─ 📄.editorconfig
├─ 📄.eslintrc.json
├─ 📄.gitignore
├─ 📄README.md
├─ 📄angular.json
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄tsconfig.app.json
├─ 📄tsconfig.json
└─ 📄tsconfig.spec.json
```

