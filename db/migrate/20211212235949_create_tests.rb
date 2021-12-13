class CreateTests < ActiveRecord::Migration[6.1]
  def change
    create_table :tests do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :stage
      t.string :phone
      t.string :company
      t.string :probability

      t.timestamps
    end
  end
end
