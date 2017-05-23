json.id user.id
json.username user.username
json.channels user.channels.each do |channel|
    json.id channel.id
    json.name channel.name
    json.private channel.private
end
