class Company < ApplicationRecord
    validates :name, uniqueness: true
    has_many :prospects, dependent: :delete_all
end
