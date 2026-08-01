module.exports.config = {
  name: "bbyreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply for names",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;
  if (!body) return;

  const names = ["bby", "জাবির", "সজিব", "সিফাত", "রাহাত"];

  if (names.some(name => body.toLowerCase().includes(name.toLowerCase()))) {
    return api.sendMessage(
      "🧑‍🍼😝 এরা হাত মারতে গেছে ক্রামে! 😂",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
