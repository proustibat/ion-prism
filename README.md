ION PRISM DIRECTIVE
===================

An Ionic directive to display blocks of code on your Ionic HTML pages, using [Prism.js](http://prismjs.com).

<table>
	<tr>
		<td>
			<a href='https://sonarcloud.io/dashboard?id=prstbt.ion-prism.directive'><img src='https://sonarcloud.io/api/badges/gate?key=prstbt.ion-prism.directive' alt='Sonar quality gate'/></a><br/>
			<a href='https://sonarcloud.io/component_measures?id=prstbt.ion-prism.directive&metric=alert_status'><img src='https://sonarcloud.io/api/badges/measure?key=prstbt.ion-prism.directive&metric=alert_status' alt='Quality Gate Status'/></a>
		</td>
		<td>
			<a href='https://david-dm.org/proustibat/ion-prism'><img src='https://david-dm.org/proustibat/ion-prism/status.svg' alt='dependencies Status'/></a><br/>
			<a href='https://david-dm.org/proustibat/ion-prism?type=dev'><img src='https://david-dm.org/proustibat/ion-prism/dev-status.svg' alt='devDependencies Status'/></a><br/>
		</td>
    <td>
      <a href='https://github.com/proustibat/ion-prism/blob/master/LICENSE.md'><img src='https://img.shields.io/github/license/proustibat/ion-prism.svg' alt='GitHub license'/></a><br/><br/>
    </td>
	</tr>
</table>

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



Usage
-----
Ion Prism directive works only on textarea element and needs a value for the language: 

```html
<ion-header>
  <ion-navbar>
    <ion-title>
      Ion Prism Directive
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

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

</ion-content>

```

Result: 
![Illustration](https://i.imgur.com/CMN7Ck1.png)



Contribute
----------
- I use [commitizen](https://github.com/commitizen/cz-cli), so if you wanna contribute to the project and create a pull request, please use it by running `git cz` instead of `git commit`.
- Issue Tracker: [https://github.com/proustibat/ion-prism/issues](https://github.com/proustibat/ion-prism/issues)
- Source Code: [https://github.com/proustibat/ion-prism](https://github.com/proustibat/ion-prism)

Support
-------
If you are having issues, please let me know: proustibat@gmail.com

License
-------
The project is licensed under the [GNU Affero General Public License v3.0 license](LICENSE)

