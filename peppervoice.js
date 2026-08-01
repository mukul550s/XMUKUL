const fs = require("fs-extra");

module.exports.config = {
  name: "peppervoice",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply with voice",
  commandCategory: "events"
};

module.exports.handleEvent = async ({ api, event }) => {
  const { body, threadID, messageID } = event;

  if (!body || !body.includes("🌶️")) return;

  const voice = __dirname + "/cache/pepper.mp3";

  if (!fs.existsSync(voice)) {
    return api.sendMessage(
      "🌶️ উফ্! কি ঝাল, ছেড়ে দেও জান! 😂🔥",
      threadID,
      messageID
    );
  }

  api.sendMessage({
    body: "🌶️ উফ্! কি ঝাল, ছেড়ে দেও জান! 😂🔥",
    attachment: fs.createReadStream(voice)
  }, threadID, messageID);
};

module.exports.run = () => {};
