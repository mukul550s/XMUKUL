module.exports.config = {
  name: "grave",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny grave command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions, senderID } = event;

  if (!Object.keys(mentions).length)
    return api.sendMessage("⚰️ একজনকে মেনশন করুন!", threadID, messageID);

  const targetID = Object.keys(mentions)[0];

  const senderName = await Users.getNameUser(senderID);
  const targetName = await Users.getNameUser(targetID);

  const msgs = [
    "⚰️ কবরের সামনে দাঁড়িয়ে ভূতের গল্প শুনছে! 👻",
    "🪦 হঠাৎ কবর থেকে অদ্ভুত শব্দ শোনা গেল! 😱",
    "👻 ভয়ে দৌড়ে পালিয়ে গেল!",
    "🌙 রাতের অন্ধকারে কবরস্থান ঘুরে বেড়াচ্ছে!",
    "💀 সবাইকে ভয় দেখানোর চেষ্টা করছে!"
  ];

  const msg = msgs[Math.floor(Math.random() * msgs.length)];

  api.sendMessage(
`⚰️ 𝗚𝗥𝗔𝗩𝗘 ⚰️

😈 ${senderName} মজা করে ${targetName}-কে কবরস্থানে পাঠিয়ে দিল!

${msg}

😂 এটি শুধুই একটি ফানি কমান্ড।`,
    threadID,
    messageID
  );
};
