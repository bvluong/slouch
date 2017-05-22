# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :user, :channel, presence: true
  after_commit { MessageRelayJob.perform_later(self)}

  belongs_to :user
  belongs_to :channel

end
