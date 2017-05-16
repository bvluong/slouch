# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "demo",password: "password");
user2 = User.create(username: "Cat",password: "password");
user3 = User.create(username: "Dog",password: "password");
user4 = User.create(username: "Horse",password: "password");

Channel.destroy_all

channel1 = Channel.create(name: "pets", description: "A place to complain about our owners")
channel2 = Channel.create(name: "general", description: "No rules!")

Subscription.destroy_all

subscription1 = Subscription.create(user_id: 1, channel_id: 1)
subscription2 = Subscription.create(user_id: 2, channel_id: 1)
subscription3 = Subscription.create(user_id: 3, channel_id: 1)
subscription4 = Subscription.create(user_id: 4, channel_id: 1)
subscription5 = Subscription.create(user_id: 1, channel_id: 2)
subscription6 = Subscription.create(user_id: 2, channel_id: 2)
