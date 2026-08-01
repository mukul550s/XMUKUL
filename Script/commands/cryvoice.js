const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "cryvoice",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto voice reply on 😭",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID } = event;

  if (!body) return;

  if (body.includes("😭")) {
    const voice = path.join(__dirname, "cache", "cry.mp3");

    if (!fs.existsSync(voice)) {
      return api.sendMessage(
        "🥺 কান্না করো কেন জান, তোমাকে আমি ভালোবাসি ❤️",
        threadID
      );
    }

    api.sendMessage({
      body: "🥺 কান্না করো কেন জান, তোমাকে আমি ভালোবাসি ❤️",
      attachment: fs.createReadStream(voice)
    }, threadID);
  }
};

module.exports.run = () => {};
