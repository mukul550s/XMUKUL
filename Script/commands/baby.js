module.exports.config = {
  name: "baby",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mukul",
  description: "Auto reply when someone says baby",
  commandCategory: "chat",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!event.body) return;

  const text = event.body.toLowerCase().trim();

  if (text === "baby") {
    const replies = [
      "🥰 হ্যাঁ জানু বলো।",
      "❤️ আমি আছি, কী বলবে?",
      "🤭 এত ডাকো কেন?",
      "👑 আমার বস মুকুল এখন ব্যস্ত।",
      "😎 বলো, কী করতে পারি?",
      "🙈 এত ডাকলে প্রেমে পড়ে যাবো।",
      "🌸 আমি শুনছি, বলো।",
      "💖 তোমার জন্যই অপেক্ষা করছিলাম।"
    ];

    return api.sendMessage(
      replies[Math.floor(Math.random() * replies.length)],
      event.threadID,
      event.messageID
    );
  }
};

module.exports.run = async function () {};
