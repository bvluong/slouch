class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast("channels:#{message.channel_id}:messages",
      id: message.id,
      body: message.body,
      username: message.user.username,
      avatar: message.user.image_url,
      time_stamp: message.updated_at
  )
  end
end
