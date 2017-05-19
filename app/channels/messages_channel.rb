class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end

  def follow(data)
    stop_all_streams
    stream_from "channels:#{data["channel_id"]}:messages"
  end
end
