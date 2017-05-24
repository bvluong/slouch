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

users << User.create(username:"Marcus Aurelius", password: "password", image_url: "http://res.cloudinary.com/djrgebhxz/image/upload/v1495319947/bust_of_marcus_aurelius__13-8-142D07083142A8FB126_qwv2wx.png")
users << User.create(username:"Seneca", password: "password", image_url: "http://res.cloudinary.com/djrgebhxz/image/upload/v1495320345/seneca_royy52.png")

5.times do
  users << FactoryGirl.create(:user, username: Faker::HarryPotter.unique.character)
end

5.times do
  users << FactoryGirl.create(:user, username: Faker::TwinPeaks.unique.character)
end

5.times do
  users << FactoryGirl.create(:user, username: Faker::StarWars.unique.character)
end

10.times do
  users << FactoryGirl.create(:user, username: Faker::Ancient.unique.primordial)
end

5.times do
  users << FactoryGirl.create(:user, username: Faker::Ancient.unique.primordial, image_url: Faker::LoremPixel.image )
end

user1 = FactoryGirl.create(:user, username: "Dobyrynin")
user2 = FactoryGirl.create(:user, username: "Debsfong")
user3 = FactoryGirl.create(:user, username: "monte47")
user4 = FactoryGirl.create(:user, username: "Ericwindmill")
user5 = FactoryGirl.create(:user, username: "Aaron.wayne")



Channel.destroy_all

channels = [
Channel.create(name: "general", description: "This channel is for team-wide communication and announcements."),
Channel.create(name: "harry-potter", description: "I solemnly swear I am up to no good."),
Channel.create(name: "twin-peaks", description: "When you see me again, it won't be me."),
Channel.create(name: "star-wars", description: "A long time ago, in a galaxy far far away"),
Channel.create(name: "stoicism", description: "Learning about Stoic principles and techniques."),
Channel.create(name: "mindfulness", description: "Moment-by-moment awareness. Living in the now"),
Channel.create(name: "reactjs", description: "A community for learning and developing web applications using React")
]

channel1 = Channel.create(name: "Dobyrynin,Marcus Aurelius", description: "Direct Message", private: true)
channel2 = Channel.create(name: "Debsfong,Marcus Aurelius", description: "Direct Message", private: true)
channel3 = Channel.create(name: "Marcus Aurelius,monte47", description: "Direct Message", private: true)
channel4 = Channel.create(name: "Ericwindmill,Marcus Aurelius", description: "Direct Message", private: true)
channel5 = Channel.create(name: "Aaron.wayne,Marcus Aurelius", description: "Direct Message", private: true)

channels2 = [
Channel.create(name: "funny", description: "You may only post if you are funny."),
Channel.create(name: "worldnews", description: "worldnews is for major news from around the world."),
Channel.create(name: "aww", description: "Things that make you go AWW! -- like puppies"),
Channel.create(name: "indieheads", description: "The latest indie music from your favorite artists."),
Channel.create(name: "shower-thoughts", description: "thoughts you might have while carrying out a routine task like showering."),
Channel.create(name: "eli5", description: "Explain it like I'm five"),
Channel.create(name: "til", description: "Today I learned"),
Channel.create(name: "ama", description: "Ask me anything"),
Channel.create(name: "advice-animals", description: "Memes with advices"),
Channel.create(name: "dank-memes", description: "No, Copypasta"),
Channel.create(name: "askreddit", description: "Explain it like I'm five"),
Channel.create(name: "technology", description: "a place to share and discuss the latest developments."),
Channel.create(name: "life-pro-tip", description: "Tips that improves life for youin a specific and significant way."),
Channel.create(name: "TIFU", description: "Today I fudged uped")
]

channel6 = Channel.create(name: "Marcus Aurelius,Seneca", description: "Direct Message", private: true)

Message.destroy_all

messages = []

40.times do
  messages << FactoryGirl.create(:message, user_id: users.sample.id, body: Faker::TwinPeaks.quote,  channel_id: (channels[4..-1].sample.id))
end

40.times do
  messages << FactoryGirl.create(:message, user_id: users.sample.id, body: Faker::HarryPotter.quote, channel_id: (channels[4..-1].sample.id))
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

30.times do
  messages << FactoryGirl.create(:message, user_id: users[5..17].sample.id, body: Faker::HarryPotter.quote, channel_id: channels2.sample.id)
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
Subscription.create(user_id: 1,channel_id: channel6.id)
Subscription.create(user_id: 2,channel_id: channel6.id)


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

emojis = ["😅","😊","😈","😎","😍","😌","😊","😏","🙏","🏽","🚀","🚁"]

Channel.find_by(id:1).messages[-5..-1].each do |message|
  [0,1,2,3,4].sample.times do
    message.reactions.create(user_id:1 , emoji: emojis.sample)
  end
end
