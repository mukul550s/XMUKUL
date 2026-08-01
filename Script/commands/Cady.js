import random
from fbchat import Client
from fbchat.models import *

bot = Client("তোমার_email", "তোমার_password")

replies = [
    "কাজি রেডি 📜 কাবিন: ৫০ লাখ টাকা 💸\nসাক্ষী: গ্রুপের সবাই।\n{0} ভাই, কবুল বলেন?",
    "{0} আপুকে বউ বানোর অফার আসছে!\nশর্ত: মাসে ১বার বিরিয়ানি খাওয়াতে হবে 🍗\nরাজি থাকলে ❤️ দাও",
    "তোমার বিয়ে ২০৩০ সালে।\nপাত্র/পাত্রী এখনো ক্লাস 5 এ পড়ে 😭",
    "লাভ ম্যারেজ কনফার্ম! 💞\nদেনমোহর: ১টা চকলেট আর ১০GB MB"
]

def handle_message(message, thread_id):
    if message.text.startswith("!biya"):
        parts = message.text.split()
        name = parts[1] if len(parts) > 1 else "তুমি"
        reply = random.choice(replies).format(name)
        bot.send(Message(text=reply), thread_id=thread_id)

bot.listen()
