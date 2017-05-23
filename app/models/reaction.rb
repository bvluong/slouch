class Reaction < ApplicationRecord
  validates :user, :message, :emoji, presence: true

  belongs_to :user
  belongs_to :message
  validates_uniqueness_of :emoji, scope: [:user_id,:message_id]
end
