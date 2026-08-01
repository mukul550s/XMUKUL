module.exports.config = {
  name: "cow",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny cow command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("🐄 একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const texts = [
    "🐄 আজ থেকে সে গ্রুপের অফিসিয়াল গরু! 😂",
    "🌿 সারাদিন শুধু ঘাস খুঁজে বেড়াচ্ছে!",
    "🥛 দুধ দেওয়ার সময় হয়ে গেছে!",
    "😂 হাম্বা হাম্বা করে পুরো গ্রুপ মাতিয়ে দিল!",
    "🐮 সবাই তাকে দেখে 'হাম্বা' বলে ডাকছে!"
  ];

  const text = texts[Math.floor(Math.random() * texts.length)];

  api.sendMessage(
`🐄 𝗖𝗢𝗪 🐄

😆 ${senderName} মজা করে ${targetName}-কে "গ্রুপের গরু" ঘোষণা করেছে!

${text}

🤣 এটি শুধুই একটি ফানি কমান্ড।`,
    threadID,
    messageID
  );
};
