module.exports.config = {
  name: "autoreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply on 😩",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("😩")) {
    return api.sendMessage(
      "🥺 মন খারাপ করো না, সব ঠিক হয়ে যাবে। ❤️",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
