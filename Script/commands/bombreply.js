const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "bombreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply with GIF when 💣 is sent",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("💣")) {
    const gif = path.join(__dirname, "cache", "bomb.gif");

    if (!fs.existsSync(gif)) {
      return api.sendMessage(
        "💣 আরে বস! বোমা নিয়ে খেলো না! 😂",
        threadID,
        messageID
      );
    }

    api.sendMessage({
      body: "💣 আরে বস! বোমা নিয়ে খেলো না! 😂",
      attachment: fs.createReadStream(gif)
    }, threadID, messageID);
  }
};

module.exports.run = () => {};
