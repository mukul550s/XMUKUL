const cron = require("node-cron");

module.exports.config = {
  name: "autorun5h",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ChatGPT",
  description: "Send auto message every 5 hours",
  commandCategory: "system",
  cooldowns: 0
};

module.exports.onLoad = ({ api }) => {
  const THREAD_ID = "1492714599060695";

  // প্রতি ৫ ঘণ্টা পর
  cron.schedule("0 */5 * * *", () => {
    api.sendMessage(
      "🤖 আমি ৫ ঘণ্টা পরপর অটো রান হচ্ছি! ✅\n👑 OWNER: MUKUL BOSS",
      THREAD_ID,
      (err) => {
        if (err) console.log(err);
        else console.log("[AUTO] 5 hour message sent!");
      }
    );
  });

  console.log("[AUTO] 5 hour auto message started.");
};

module.exports.run = async ({ api, event }) => {
  return api.sendMessage(
    "✅ ৫ ঘণ্টা পরপর অটো মেসেজ চালু হয়েছে।",
    event.threadID,
    event.messageID
  );
};
