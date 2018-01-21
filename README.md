ION PRISM DIRECTIVE  [![GitHub top language](https://img.shields.io/github/languages/top/proustibat/ion-prism.svg)](https://github.com/proustibat/ion-prism) <a href='https://github.com/proustibat/ion-prism/blob/master/LICENSE.md'><img src='https://img.shields.io/github/license/proustibat/ion-prism.svg' alt='GitHub license'/></a>
===================

An Ionic directive to display blocks of code on your Ionic HTML pages, using [Prism.js](http://prismjs.com).


| [![NPM](https://nodei.co/npm/ion-prism.png?compact=true)](https://www.npmjs.com/package/ion-prism) </br> [![GitHub package version](https://img.shields.io/github/package-json/v/proustibat/ion-prism.svg)]() [![npm](https://img.shields.io/npm/v/ion-prism.svg)](https://www.npmjs.com/package/ion-prism) [![Npm downloads](https://img.shields.io/npm/dt/ion-prism.svg)](https://www.npmjs.com/package/ion-prism) | [![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)](https://github.com/proustibat/ion-prism/commits/master) </br> [![GitHub last commit](https://img.shields.io/github/last-commit/proustibat/ion-prism.svg)](https://github.com/proustibat/ion-prism/commits/master) </br> [![Open issues](https://sonarcloud.io/api/badges/measure?key=prstbt.ion-prism.directive&metric=open_issues)](https://sonarcloud.io/component_measures?id=prstbt.ion-prism.directive&metric=open_issues) | [![Build Status](https://travis-ci.org/proustibat/ion-prism.svg?branch=master)](https://travis-ci.org/proustibat/ion-prism) </br> [![Sonar quality gate](https://sonarcloud.io/api/badges/gate?key=prstbt.ion-prism.directive)](https://sonarcloud.io/dashboard?id=prstbt.ion-prism.directive) </br> [![Code Climate](https://codeclimate.com/github/proustibat/ion-prism/badges/gpa.svg)](https://codeclimate.com/github/proustibat/ion-prism) </br> [![Coverage Status](https://coveralls.io/repos/github/proustibat/ion-prism/badge.svg?branch=master)](https://coveralls.io/github/proustibat/ion-prism?branch=master) | [![Greenkeeper badge](https://badges.greenkeeper.io/proustibat/ion-prism.svg)](https://greenkeeper.io/) </br>[![Dependencies Status](https://david-dm.org/proustibat/stats-text/status.svg)](https://david-dm.org/proustibat/stats-text) </br>[![DevDependencies Status](https://david-dm.org/proustibat/stats-text/dev-status.svg)](https://david-dm.org/proustibat/stats-text?type=dev) |
| --- | :--- | :---- | :----


-----------------

Installation
------------

```
npm install --save ion-prism
```

### Import Prism CSS in your Ionic Project

Ionic allows to extend or override ionic app-scripts in order. So add a task to the ionic_copy config as follows.

First, at the root of your project folder, add a folder *config* (if it doesn't exist) then create a *copy.config.js* in it with this content (or just add the task it if the file already exists):

```javascript
module.exports = {
    copyPrism: {
        src: ['{{ROOT}}/node_modules/prismjs/themes/**/*'],
        dest: '{{WWW}}/assets/prismjs/themes'
    }
}
```

Then in your *package.json*, add this:
```json
  "config": {
    "ionic_copy": "./config/copy.config.js"
  }
```

CSS from the Prism.js library will be copy to your output folder. 


Finally, you just need to add css file in the *index.html* of the Ionic app: 

```html
<link href="assets/prismjs/themes/prism.css" rel="stylesheet">
```
**Note that you may want import one of the other css files of Prismjs to change the theme as you want.** *(prism-coy.css, prism-dark.css, prism-funky.css, prism-okaidia.css, prism-solarizedlight.css, prism-tomorrow.css, prism-twilight.css)*

### Declare directive in your app
In *app.module.ts*, import IonPrismDirective and add it to the declarations of @NgModule as follows:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonPrismDirective } from 'ion-prism';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IonPrismDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

```


Usage
-----
Ion Prism directive works only on textarea element and needs a value for the language: 

```html
<textarea ion-prism="<language_type_here>">
    <your_code_to_display_here_>
</textarea>
```


### Example

A full app as example is [available here](https://github.com/proustibat/ion-prism-app-example). 

```html
  <h1>Example with javascript</h1>
  <textarea ion-prism="javascript">
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  </textarea>

  <h1>Example with html</h1>
  <textarea ion-prism="html">
    <svg width="200" height="200" style="border:1px solid black;">
        <circle cx="20" cy="20" r="20" fill="green" />
        <circle cx="70" cy="70" r="20" fill="purple" />
        <rect x="110" y="110" height="30" width="30" fill="blue" />
        <rect x="160" y="160" height="30" width="30" fill="red" />
    </svg>
  </textarea>
```

Result: 

<img src="https://i.imgur.com/CMN7Ck1.png" width="340" alt="Result illustration"/>

Contribute
----------
- Issue Tracker: [https://github.com/proustibat/ion-prism/issues](https://github.com/proustibat/occurences/issues)
- Source Code: [https://github.com/proustibat/ion-prism](https://github.com/proustibat/occurences)
- Pull Requests: [https://github.com/proustibat/ion-prism/pulls](https://github.com/proustibat/occurences/pulls)

(I use [commitizen](https://github.com/commitizen/cz-cli), so if you wanna contribute to the project and create a pull request, please use it by running `git cz` instead of `git commit`.)

Support
-------
If you are having issues, please let me know: proustibat@gmail.com

License
-------
The project is licensed under the [GNU Affero General Public License v3.0 license](LICENSE)

