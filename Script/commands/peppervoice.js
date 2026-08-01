const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "peppervoice",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto voice reply on 🌶️",
  commandCategory: "events",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID } = event;

  if (!body) return;
  if (!body.includes("🌶️")) return;

  const voice = path.join(__dirname, "cache", "pepper.mp3");

  if (!fs.existsSync(voice)) {
    return api.sendMessage(
      "🌶️ উফ্! কি ঝাল, ছেড়ে দাও জান! 😂",
      threadID
    );
  }

  api.sendMessage({
    body: "🌶️ উফ্! কি ঝাল, ছেড়ে দাও জান! 😂",
    attachment: fs.createReadStream(voice)
  }, threadID);
};

module.exports.run = () => {};
