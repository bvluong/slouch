class UsersChannel < ApplicationCable::Channel
  def follow(data)
    stream_from "users:#{data["user_id"]}"
  end

  def unsubscribed
    stop_all_streams
  end
end
