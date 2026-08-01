module.exports.config = {
  name: "senduid",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ChatGPT",
  description: "Send a message to a user by UID",
  commandCategory: "admin",
  usages: "<uid> | <message>",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;

  const input = args.join(" ").split("|");

  if (input.length < 2) {
    return api.sendMessage(
      "ব্যবহার:\n.senduid <UID> | <বার্তা>",
      threadID,
      messageID
    );
  }

  const uid = input[0].trim();
  const message = input[1].trim();

  api.sendMessage(message, uid, (err) => {
    if (err) {
      return api.sendMessage(
        "❌ বার্তা পাঠানো যায়নি। বটের ওই ব্যবহারকারীর সাথে মেসেজ পাঠানোর অনুমতি নাও থাকতে পারে।",
        threadID,
        messageID
      );
    }

    api.sendMessage(
      `✅ UID ${uid}-এ বার্তা পাঠানোর চেষ্টা করা হয়েছে।`,
      threadID,
      messageID
    );
  });
};
