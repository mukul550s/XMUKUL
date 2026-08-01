module.exports.config = {
  name: "biya",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ChatGPT",
  description: "Funny marriage command",
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID, messageID, mentions } = event;

  const replies = [
    "📜 কাজি রেডি!\n💸 কাবিন: ৫০ লাখ টাকা\n🎉 সবাই সাক্ষী!",
    "💍 বিয়ে কনফার্ম!\n🍗 শর্ত: মাসে একবার বিরিয়ানি খাওয়াতে হবে!",
    "😂 বিয়ের তারিখ: ২০৩০ সাল!",
    "❤️ লাভ ম্যারেজ সফল!"
  ];

  let target = "তুমি";

  if (Object.keys(mentions).length) {
    const uid = Object.keys(mentions)[0];
    target = await Users.getNameUser(uid);
  }

  const reply = replies[Math.floor(Math.random() * replies.length)];

  api.sendMessage(
    `💒 ${target}\n\n${reply}\n\n🤣 এটি শুধুই ফানি কমান্ড।`,
    threadID,
    messageID
  );
};
