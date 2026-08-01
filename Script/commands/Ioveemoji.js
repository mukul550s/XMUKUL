module.exports.config = {
  name: "loveemoji",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply on 😝 emoji",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("😝")) {
    return api.sendMessage(
      "😝 I Love You ❤️\n🌸 মুকুল বসের পক্ষ থেকে ভালোবাসা রইলো! 🥰",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
