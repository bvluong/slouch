class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.string :emoji, null: false
      t.integer :user_id, null: false
      t.integer :message_id, null: false
      t.timestamps
    end
    add_index :reactions, [:emoji, :user_id, :message_id], name: :index_emoji_on_user_id_and_message, unique: true, using: :btree
  end
end
