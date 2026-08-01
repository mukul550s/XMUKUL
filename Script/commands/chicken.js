module.exports.config = {
  name: "chicken",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny chicken command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("🐔 একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const texts = [
    "🐔 আজ থেকে সে অফিসিয়ালি গ্রুপের মুরগি! 😂",
    "🍗 সবাই তাকে দেখে 'কক্ কক্' ডাকতে শুরু করল!",
    "🥚 ডিম পাড়ার দায়িত্ব এখন তার!",
    "🏃‍♂️ শিয়াল দেখে দৌড়ে পালিয়ে গেল!",
    "😂 মুরগির মতো নাচ শুরু করে দিল!"
  ];

  const text = texts[Math.floor(Math.random() * texts.length)];

  api.sendMessage(
`🐔 𝗖𝗛𝗜𝗖𝗞𝗘𝗡 🐔

😆 ${senderName} মজা করে ${targetName}-কে "গ্রুপের মুরগি" ঘোষণা করেছে!

${text}

🤣 এটি শুধুই ফানি কমান্ড।`,
    threadID,
    messageID
  );
};
