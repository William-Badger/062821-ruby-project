class Poem < ActiveRecord::Base
    belongs_to :author
    belongs_to :user

end