class Prospect < ApplicationRecord
  belongs_to :company

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :stage, presence: true
  # validates :probability, presence: true, length: {minimum: 0, maximum: 100}
end
