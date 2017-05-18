# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "Marcus Aurelius",password: "password");
user2 = User.create(username: "Seneca",password: "password");
user3 = User.create(username: "Cleanthes",password: "password");
user4 = User.create(username: "Chrysippus",password: "password");
user5 = User.create(username: "Sorcrates",password: "password");
user6 = User.create(username: "Aristotle",password: "password");
user7 = User.create(username: "Plato",password: "password");
user8 = User.create(username: "Zeno",password: "password");
user9 = User.create(username: "Epictetus",password: "password");


Channel.destroy_all

channel1 = Channel.create(name: "general", description: "This channel is for team-wide communication and announcements.")
channel2 = Channel.create(name: "stoicism", description: "Learning about Stoic principles and techniques.")
channel3 = Channel.create(name: "indieheads", description: "The latest albums, videos, news, and anything else indie music")
channel4 = Channel.create(name: "funny", description: "You may only post if you are funny")
channel5 = Channel.create(name: "eli5", description: "Explain it like I'm five")
channel6 = Channel.create(name: "mindfulness", description: "Moment-by-moment awareness. Living in the now")
channel7 = Channel.create(name: "reactjs", description: "A community for learning and developing web applications using React")


Subscription.destroy_all

subscription1 = Subscription.create(user_id: user1.id, channel_id: channel1.id)
subscription2 = Subscription.create(user_id: user1.id, channel_id: channel2.id)
subscription3 = Subscription.create(user_id: user1.id, channel_id: channel3.id)
subscription4 = Subscription.create(user_id: user1.id, channel_id: channel4.id)
subscription5 = Subscription.create(user_id: user1.id, channel_id: channel5.id)
subscription6 = Subscription.create(user_id: user1.id, channel_id: channel6.id)
subscription7 = Subscription.create(user_id: user1.id, channel_id: channel7.id)
subscription8 = Subscription.create(user_id: user2.id, channel_id: channel1.id)
subscription9 = Subscription.create(user_id: user2.id, channel_id: channel2.id)
subscription10 = Subscription.create(user_id: user2.id, channel_id: channel3.id)
subscription11 = Subscription.create(user_id: user2.id, channel_id: channel4.id)
subscription12 = Subscription.create(user_id: user2.id, channel_id: channel5.id)
subscription13 = Subscription.create(user_id: user2.id, channel_id: channel6.id)
subscription14 = Subscription.create(user_id: user2.id, channel_id: channel7.id)
subscription15 = Subscription.create(user_id: user3.id, channel_id: channel1.id)
subscription16 = Subscription.create(user_id: user3.id, channel_id: channel2.id)
subscription17 = Subscription.create(user_id: user3.id, channel_id: channel3.id)
subscription18 = Subscription.create(user_id: user3.id, channel_id: channel4.id)
subscription19 = Subscription.create(user_id: user3.id, channel_id: channel5.id)
subscription20 = Subscription.create(user_id: user3.id, channel_id: channel6.id)
subscription21 = Subscription.create(user_id: user4.id, channel_id: channel1.id)
subscription22 = Subscription.create(user_id: user5.id, channel_id: channel1.id)
subscription23 = Subscription.create(user_id: user6.id, channel_id: channel1.id)
subscription24 = Subscription.create(user_id: user7.id, channel_id: channel1.id)
subscription25 = Subscription.create(user_id: user8.id, channel_id: channel1.id)
subscription26 = Subscription.create(user_id: user9.id, channel_id: channel1.id)

subscription27 = Subscription.create(user_id: user4.id, channel_id: channel2.id)
subscription28 = Subscription.create(user_id: user5.id, channel_id: channel2.id)
subscription29 = Subscription.create(user_id: user6.id, channel_id: channel2.id)
subscription30 = Subscription.create(user_id: user7.id, channel_id: channel2.id)
subscription31 = Subscription.create(user_id: user8.id, channel_id: channel2.id)
subscription32 = Subscription.create(user_id: user9.id, channel_id: channel2.id)

Message.destroy_all
message1 = Message.create(body: "Marcus Aurelius", channel_id: channel1.id, user_id: user1.id);
message2 = Message.create(body: "Seneca", channel_id: channel1.id, user_id: user2.id);
message3 = Message.create(body: "Cleanthes", channel_id: channel1.id, user_id: user3.id);
message4 = Message.create(body: "Chrysippus", channel_id: channel1.id, user_id: user4.id);
message5 = Message.create(body: "Sorcrates", channel_id: channel1.id, user_id: user1.id);
message6 = Message.create(body: "Marcus Aurelius", channel_id: channel6.id, user_id: user1.id);
message7 = Message.create(body: "Seneca", channel_id: channel2.id, user_id: user2.id);
message8 = Message.create(body: "Cleanthes", channel_id: channel3.id, user_id: user3.id);
message9 = Message.create(body: "Chrysippus", channel_id: channel4.id, user_id: user4.id);
message10 = Message.create(body: "Sorcrates", channel_id: channel5.id, user_id: user1.id);
