# generator pure reproduction

do

```
npm install
node_modules/.bin/webpack
```

see in `dist/main.js`, foo.jpg (using generator) is a module exporting a string, but bar.jpg (using pure loader) was inlined.