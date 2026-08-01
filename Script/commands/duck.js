module.exports.config = {
  name: "duck",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny duck command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("🦆 একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const texts = [
    "🦆 আজ থেকে সে গ্রুপের হাঁস! 😂",
    "🌊 পুকুরে সাঁতার কাটতে চলে গেল!",
    "🥚 আজকে ৫টা ডিম পেড়েছে! 🤣",
    "🪿 ক্যাঁক ক্যাঁক করে পুরো গ্রুপ মাতিয়ে দিল!",
    "😂 সবাই তাকে দেখে হাঁসের ডাক দিচ্ছে!"
  ];

  const text = texts[Math.floor(Math.random() * texts.length)];

  api.sendMessage(
`🦆 𝗗𝗨𝗖𝗞 🦆

😆 ${senderName} মজা করে ${targetName}-কে "গ্রুপের হাঁস" বানিয়ে দিল!

${text}

🤣 এটি শুধুই একটি ফানি কমান্ড।`,
    threadID,
    messageID
  );
};
