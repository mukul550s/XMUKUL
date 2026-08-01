module.exports.config = {
  name: "kingreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply on 👑 emoji",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { body, threadID, messageID } = event;

  if (!body) return;

  if (body.includes("👑")) {
    return api.sendMessage(
      "👑 আমার বস মুকুল তানজিলাকে অনেক ভালোবাসে! ❤️\n🥹 কখনো আমার বসকে কষ্ট দিও না। 😅😓😭",
      threadID,
      messageID
    );
  }
};

module.exports.run = () => {};
