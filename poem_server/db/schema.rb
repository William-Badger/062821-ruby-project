# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_23_170140) do

  create_table "authors", force: :cascade do |t|
    t.string "author_name"
  end

  create_table "poems", force: :cascade do |t|
    t.string "title"
    t.text "poem_content"
    t.integer "author_id"
    t.integer "user_id"
    t.index ["author_id"], name: "index_poems_on_author_id"
    t.index ["user_id"], name: "index_poems_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
  end

  add_foreign_key "poems", "authors"
  add_foreign_key "poems", "users"
end
