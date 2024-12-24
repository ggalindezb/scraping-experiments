# Puppeteer scraper

## Install

## Deploy

```sh
zip -x .git/\* -x node_modules/\* -x .gitignore -x layer.zip -r function.zip .
rm -rf nodejs && mkdir nodejs && cp -r node_modules/ nodejs && zip -x .git/\* -x .gitignore -x function.zip -r layer.zip nodejs && rm -rf nodejs
```

## Develop

```js
  const { default: fs } = await import("fs")
  const { default: jsdom } = await import("jsdom")
  const { JSDOM } = jsdom

  const html = fs.readFileSync('output.html', 'utf8')
  const dom = new JSDOM(html);
```
