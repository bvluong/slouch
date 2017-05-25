class SubscriptionRelayJob < ApplicationJob
  queue_as :default

  def perform(sub)
    ActionCable.server.broadcast("users:#{sub.user.id}",
      id: sub.channel.id,
      name: sub.channel.name,
      private: true,
      users: sub.channel.users,
      description: sub.channel.description,
      new_channel: true
  )
  end
end
