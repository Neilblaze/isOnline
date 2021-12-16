// isOnline NPM package | © 2021 Pratyay Banerjee (neilblaze.live) | MIT License

const checkOnlineStatus = async () => {
  try {
    const online = await fetch("./"); // use any content or live links
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
}, 2500);
