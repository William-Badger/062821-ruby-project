class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :title
      t.text :poem_content
      t.belongs_to :author, foreign_key: true 
      t.belongs_to :user, foreign_key: true
      
    end
  end
end
