module.exports.config = {
  name: "send",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ChatGPT",
  description: "Send message to a permitted user by UID",
  commandCategory: "admin",
  usages: "<uid> | <message>",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const input = args.join(" ").split("|");

  if (input.length < 2) {
    return api.sendMessage(
      "ব্যবহার:\n.send <UID> | <বার্তা>",
      event.threadID,
      event.messageID
    );
  }

  const uid = input[0].trim();
  const message = input[1].trim();

  api.sendMessage(message, uid, (err) => {
    if (err) {
      return api.sendMessage(
        "❌ বার্তা পাঠানো যায়নি। ওই ব্যবহারকারীর সাথে বটের মেসেজ পাঠানোর অনুমতি নাও থাকতে পারে।",
        event.threadID,
        event.messageID
      );
    }

    api.sendMessage(
      "✅ বার্তা পাঠানো হয়েছে।",
      event.threadID,
      event.messageID
    );
  });
};
