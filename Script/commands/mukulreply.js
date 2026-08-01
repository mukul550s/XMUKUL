module.exports.config = {
  name: "mukulreply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Auto reply when Mukul is mentioned",
  commandCategory: "events",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { body, threadID, senderID } = event;

  if (!body) return;

  const text = body.toLowerCase();

  if (text.includes("মুকুল") || text.includes("mukul")) {
    const name = await Users.getNameUser(senderID);

    return api.sendMessage({
      body: `👋 @${name}\n\n👑 আমার বস মুকুল অফলাইনে আছে।\n💬 যা বলার আমাকে বলো! 😎`,
      mentions: [{
        tag: `@${name}`,
        id: senderID
      }]
    }, threadID);
  }
};

module.exports.run = () => {};
