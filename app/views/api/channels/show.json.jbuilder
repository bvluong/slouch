json.id @channel.id
json.name @channel.name
json.description @channel.description
json.private @channel.private
json.time_stamp @channel.created_at
json.users @channel.users.each do |user|
  json.id user.id
  json.name user.username
  json.avatar user.image_url
end
