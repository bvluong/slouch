@messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.username message.user.username
    json.body message.body
    json.time_stamp message.updated_at
  end
end
