module.exports.config = {
  name: "middlefingerreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply on 🖕 emoji",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("🖕")) {
    return api.sendMessage(
      "🖕 কাকে আঙুল দেখাও? 😏 আগে ভদ্র হও, তারপর কথা বলো! 😂",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
