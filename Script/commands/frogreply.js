module.exports.config = {
  name: "frogreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply on 🐸 emoji",
  commandCategory: "events",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("🐸")) {
    return api.sendMessage(
      "🐸 কাকে 🐸 ব্যাঙ দেখাও? আমি ভয় পাই না! 😎",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
