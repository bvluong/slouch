# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  private     :boolean          default("false"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :private, presence: true

  has_many :subscriptions
  has_many :users, through: :subscriptions

end
