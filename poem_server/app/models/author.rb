class Author < ActiveRecord::Base
    has_many :poems
    has_many :users, through: :poems


end