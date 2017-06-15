# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170523161430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string   "name",                        null: false
    t.string   "description"
    t.boolean  "private",     default: false, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["name"], name: "index_channels_on_name", unique: true, using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "channel_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  end

  create_table "reactions", force: :cascade do |t|
    t.string   "emoji",      null: false
    t.integer  "user_id",    null: false
    t.integer  "message_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["emoji", "user_id", "message_id"], name: "index_emoji_on_user_id_and_message", unique: true, using: :btree
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "channel_id"], name: "index_subscriptions_on_user_id_and_channel_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                 null: false
    t.string   "password_digest",                                                                                                          null: false
    t.string   "session_token",                                                                                                            null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/djrgebhxz/image/upload/v1495084528/1495102506_Aristotle_etvkfj.svg"
    t.datetime "created_at",                                                                                                               null: false
    t.datetime "updated_at",                                                                                                               null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
