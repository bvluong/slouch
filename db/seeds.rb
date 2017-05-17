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

channel1 = Channel.create(name: "general", description: "the front page")
channel2 = Channel.create(name: "stoicism", description: "Learning about Stoic principles and techniques.")
channel3 = Channel.create(name: "indieheads", description: "The latest albums, videos, news, and anything else indie music")
channel4 = Channel.create(name: "funny", description: "You may only post if you are funny")
channel5 = Channel.create(name: "eli5", description: "Explain it like I'm five")
channel6 = Channel.create(name: "mindfulness", description: "Moment-by-moment awareness. Living in the now")
channel7 = Channel.create(name: "reactjs", description: "A community for learning and developing web applications using React")


Subscription.destroy_all

subscription1 = Subscription.create(user_id: 1, channel_id: 1)
subscription2 = Subscription.create(user_id: 1, channel_id: 2)
subscription3 = Subscription.create(user_id: 1, channel_id: 3)
subscription4 = Subscription.create(user_id: 1, channel_id: 4)
subscription5 = Subscription.create(user_id: 1, channel_id: 5)
subscription6 = Subscription.create(user_id: 1, channel_id: 6)
subscription7 = Subscription.create(user_id: 1, channel_id: 7)
subscription8 = Subscription.create(user_id: 2, channel_id: 1)
subscription9 = Subscription.create(user_id: 2, channel_id: 2)
subscription10 = Subscription.create(user_id: 2, channel_id: 3)
subscription11 = Subscription.create(user_id: 2, channel_id: 4)
subscription12 = Subscription.create(user_id: 2, channel_id: 5)
subscription13 = Subscription.create(user_id: 2, channel_id: 6)
subscription14 = Subscription.create(user_id: 2, channel_id: 7)
subscription15 = Subscription.create(user_id: 3, channel_id: 1)
subscription16 = Subscription.create(user_id: 3, channel_id: 2)
subscription17 = Subscription.create(user_id: 3, channel_id: 3)
subscription18 = Subscription.create(user_id: 3, channel_id: 4)
subscription19 = Subscription.create(user_id: 3, channel_id: 5)
subscription20 = Subscription.create(user_id: 3, channel_id: 6)
subscription21 = Subscription.create(user_id: 4, channel_id: 1)
subscription22 = Subscription.create(user_id: 5, channel_id: 1)
subscription23 = Subscription.create(user_id: 6, channel_id: 1)
subscription24 = Subscription.create(user_id: 7, channel_id: 1)
subscription25 = Subscription.create(user_id: 8, channel_id: 1)
subscription26 = Subscription.create(user_id: 9, channel_id: 1)

subscription27 = Subscription.create(user_id: 4, channel_id: 2)
subscription28 = Subscription.create(user_id: 5, channel_id: 2)
subscription29 = Subscription.create(user_id: 6, channel_id: 2)
subscription30 = Subscription.create(user_id: 7, channel_id: 2)
subscription31 = Subscription.create(user_id: 8, channel_id: 2)
subscription32 = Subscription.create(user_id: 9, channel_id: 2)
