# isOnline 🌐

> **isOnline** is a simple npm package that checks if a website is online or not ✔️

## Installing the package

First, add a `.npmrc` file with the following content:

```
@neilblaze:registry=https://npm.pkg.github.com
```

Then install:
`npm i -S @neilblaze/isOnline`

## Usage

Returns `Online` if the website is online, `Offline` otherwise.

- **Online** => Boolean (**true**)
- **Offline** => Boolean (**false**)

## Example

👉 Deployed version can be explored [here](https://isonline.netlify.app)

```js
const checkOnlineStatus = async () => {
  try {
    const online = await fetch("<./ or your endpoint>"); // use any content or live links
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely offline
  }
};

setInterval(async () => {
  console.error = () => {}; // removes GET errors if offline
  const result = await checkOnlineStatus();
  var isOnline = result;
  if (isOnline === true ? console.log("Online \n") : console.log("Offline \n")); // Feel free to exclude line breaks
}, <delay_in_ms>);
```

## Contributing

Pull requests are always welcome! 🌟

## License

MIT © [Pratyay Banerjee](https://neilblaze.live)