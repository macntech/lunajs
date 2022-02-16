# :waxing_crescent_moon: LunaJS 
LunaJS is a lightweight vanilla JS library to add dark mode on your website. This script works in all modern browsers.  

> :warning: **Under Construction** Work in Progress. Nothing to use yet :(

## Get Started
You can use npm to install it or include the web script on the header of your page via CDN.
### Include JS
Install it with npm
```bash
npm install --save lunajs
```
OR
include the script at the bottom of the page before the closing body tag
```html
<script src="">
```
As alternative you can download the latest release from this repo and include the files from the dist folder.
```html
<script src="">
```
### Include CSS
CSS is used for some basic styling
```html
<link rel="stylesheet" href="">
```
OR
If you installed it with npm and use sass you might try import the styles from
```bash
@import 'lunajs/src/sass/main.scss';
```

## Usage
Initialize the script at the bottom of the page before the closing body tag
```html
<script>
    lunajs.init({
        lunaSelector: '.switch',
    });
</script>
```
### Options
```js
//Where to render the dark mode switch
lunaSelector: '.switch',

//Option
luna

```