# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validates :user, :channel, presence: true
  validates_uniqueness_of :channel_id, scope: :user_id
  after_commit { SubscriptionRelayJob.perform_later(self)}

  belongs_to :user
  belongs_to :channel


end
