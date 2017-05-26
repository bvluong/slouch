class UsersChannel < ApplicationCable::Channel
  def follow(data)
    stream_from "users:#{data["user_id"]}"
  end

end
