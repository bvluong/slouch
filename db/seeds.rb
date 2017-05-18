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
end


User.destroy_all

user1 = User.create(username:"Marcus Aurelius", password: "password")
user2 = User.create(username:"Seneca", password: "password")
(3..10).step do
  FactoryGirl.create(:user, username: (Faker::Ancient.unique.primordial) )
end

(10..15).step do
  FactoryGirl.create(:user)
end

Channel.destroy_all

channel1 = Channel.create(name: "general", description: "This channel is for team-wide communication and announcements.")
channel2 = Channel.create(name: "stoicism", description: "Learning about Stoic principles and techniques.")
channel3 = Channel.create(name: "Harry Potter", description: "I solemnly swear I am up to no good.")
channel4 = Channel.create(name: "funny", description: "You may only post if you are funny")
channel5 = Channel.create(name: "eli5", description: "Explain it like I'm five")
channel6 = Channel.create(name: "mindfulness", description: "Moment-by-moment awareness. Living in the now")
channel7 = Channel.create(name: "reactjs", description: "A community for learning and developing web applications using React")


Message.destroy_all

FactoryGirl.define do
  factory :message do
    user_id  { 1 + rand(8) }
    channel_id { 1 + rand(6) }
    body { Faker::ChuckNorris.fact }
  end
end

20.times do
  FactoryGirl.create(:message)
end

12.times do
  FactoryGirl.create(:message, body: Faker::ChuckNorris.fact , channel_id: 1)
end

12.times do
  FactoryGirl.create(:message, user_id: (10 + rand(5)), body: Faker::HarryPotter.quote, channel_id: 3)
end





Subscription.destroy_all

subscription1 = Subscription.create(user_id: 1, channel_id: channel1.id)
subscription2 = Subscription.create(user_id: 1, channel_id: channel2.id)
subscription3 = Subscription.create(user_id: 1, channel_id: channel3.id)
subscription4 = Subscription.create(user_id: 1, channel_id: channel4.id)
subscription5 = Subscription.create(user_id: 1, channel_id: channel5.id)
subscription6 = Subscription.create(user_id: 1, channel_id: channel6.id)
subscription7 = Subscription.create(user_id: 1, channel_id: channel7.id)
subscription8 = Subscription.create(user_id: 2, channel_id: channel1.id)
subscription9 = Subscription.create(user_id: 2, channel_id: channel2.id)
subscription10 = Subscription.create(user_id: 2, channel_id: channel3.id)
subscription11 = Subscription.create(user_id: 2, channel_id: channel4.id)
subscription12 = Subscription.create(user_id: 2, channel_id: channel5.id)
subscription13 = Subscription.create(user_id: 2, channel_id: channel6.id)
subscription14 = Subscription.create(user_id: 2, channel_id: channel7.id)
subscription15 = Subscription.create(user_id: 3, channel_id: channel1.id)
subscription16 = Subscription.create(user_id: 3, channel_id: channel2.id)
subscription17 = Subscription.create(user_id: 3, channel_id: channel3.id)
subscription18 = Subscription.create(user_id: 3, channel_id: channel4.id)
subscription19 = Subscription.create(user_id: 3, channel_id: channel5.id)
subscription20 = Subscription.create(user_id: 3, channel_id: channel6.id)
subscription21 = Subscription.create(user_id: 4, channel_id: channel1.id)
subscription22 = Subscription.create(user_id: 5, channel_id: channel1.id)
subscription23 = Subscription.create(user_id: 6, channel_id: channel1.id)
subscription24 = Subscription.create(user_id: 7, channel_id: channel1.id)
subscription25 = Subscription.create(user_id: 8, channel_id: channel1.id)
subscription26 = Subscription.create(user_id: 9, channel_id: channel1.id)

subscription27 = Subscription.create(user_id: 4, channel_id: channel2.id)
subscription28 = Subscription.create(user_id: 5, channel_id: channel2.id)
subscription29 = Subscription.create(user_id: 6, channel_id: channel2.id)
subscription30 = Subscription.create(user_id: 7, channel_id: channel2.id)
subscription31 = Subscription.create(user_id: 8, channel_id: channel2.id)
subscription32 = Subscription.create(user_id: 9, channel_id: channel2.id)
subscription32 = Subscription.create(user_id: 10, channel_id: channel3.id)
subscription32 = Subscription.create(user_id: 11, channel_id: channel3.id)
subscription32 = Subscription.create(user_id: 12, channel_id: channel3.id)
subscription32 = Subscription.create(user_id: 13, channel_id: channel3.id)
subscription32 = Subscription.create(user_id: 14, channel_id: channel3.id)
subscription32 = Subscription.create(user_id: 15, channel_id: channel3.id)
