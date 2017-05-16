json.currentUser @user, :id, :username

json.channels @user.channels.each do |channel|
  json.set! channel.id do
    json.name channel.name
    json.private channel.private
  end
end
