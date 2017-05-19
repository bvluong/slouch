# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'factory_girl'
require 'factory_girl_rails'
require 'faker'


FactoryGirl.define do
  factory :user do
    username { Faker::HarryPotter.unique.character }
    password "password"
    image_url { Faker::Avatar.image }
  end

  factory :message do
    body { Faker::ChuckNorris.fact }
  end

end


User.destroy_all

users = []

users << User.create(username:"Marcus Aurelius", password: "password")
users << User.create(username:"Seneca", password: "password")

5.times do
  users << FactoryGirl.create(:user, username: Faker::HarryPotter.unique.character)
end

5.times do
  users << FactoryGirl.create(:user, username: Faker::TwinPeaks.unique.character)
end

5.times do
  users << FactoryGirl.create(:user, username: Faker::StarWars.unique.character)
end

15.times do
  users << FactoryGirl.create(:user, username: Faker::Ancient.unique.primordial)
end

user1 = FactoryGirl.create(:user, username: "dobyrynin")
user2 = FactoryGirl.create(:user, username: "debsfong")
user3 = FactoryGirl.create(:user, username: "monte47")
user4 = FactoryGirl.create(:user, username: "ericwindmill")
user5 = FactoryGirl.create(:user, username: "aaron.wayne")



Channel.destroy_all

channels = [
Channel.create(name: "general", description: "This channel is for team-wide communication and announcements."),
Channel.create(name: "Harry Potter", description: "I solemnly swear I am up to no good."),
Channel.create(name: "TwinPeaks", description: "When you see me again, it won't be me."),
Channel.create(name: "Star Wars", description: "A long time ago, in a galaxy far far away"),
Channel.create(name: "Stoicism", description: "Learning about Stoic principles and techniques."),
Channel.create(name: "mindfulness", description: "Moment-by-moment awareness. Living in the now"),
Channel.create(name: "reactjs", description: "A community for learning and developing web applications using React")]

channel1 = Channel.create(name: "dobyrynin", description: "", private: true)
channel2 = Channel.create(name: "debsfong", description: "", private: true)
channel3 = Channel.create(name: "monte47", description: "", private: true)
channel4 = Channel.create(name: "ericwindmill", description: "", private: true)
channel5 = Channel.create(name: "aaron.wayne", description: "", private: true)

Message.destroy_all

messages = []

80.times do
  messages << FactoryGirl.create(:message, user_id: users.sample.id, channel_id: (channels[4..-1].sample.id))
end

15.times do
  messages << FactoryGirl.create(:message, user_id: users.sample.id, body: Faker::ChuckNorris.fact , channel_id: channels[0].id)
end

12.times do
  messages << FactoryGirl.create(:message, user_id: users[3..7].sample.id, body: Faker::HarryPotter.quote, channel_id: channels[1].id)
end

12.times do
  messages << FactoryGirl.create(:message, user_id: users[8..12].sample.id, body: Faker::TwinPeaks.quote, channel_id: channels[2].id)
end

12.times do
  messages << FactoryGirl.create(:message, user_id: users[13..17].sample.id, body: Faker::StarWars.quote, channel_id: channels[3].id)
end

Subscription.destroy_all

user_subscriptions = Hash.new { Set.new }

(1..31).step do |user_id|
  user_subscriptions[user_id] = (user_subscriptions[user_id] << 1)
end

(1..12).step do |channel_id|
  user_subscriptions[1] = (user_subscriptions[1] << channel_id)
end

Subscription.create(user_id: user1.id,channel_id: channel1.id)
Subscription.create(user_id: user2.id,channel_id: channel2.id)
Subscription.create(user_id: user3.id,channel_id: channel3.id)
Subscription.create(user_id: user4.id,channel_id: channel4.id)
Subscription.create(user_id: user5.id,channel_id: channel5.id)


(1..7).step do |channel_id|
  user_subscriptions[1] = (user_subscriptions[1] << channel_id)
  user_subscriptions[2] = (user_subscriptions[2] << channel_id)
end

messages.each do |message|
  user_id = message.user_id
  channel_id = message.channel_id
  user_subscriptions[user_id] = (user_subscriptions[user_id] << channel_id)
end

user_subscriptions.each do |user_id, channel_arr|
  channel_arr.each do |channel_id|
    Subscription.create(user_id: user_id,channel_id: channel_id)
  end
end
