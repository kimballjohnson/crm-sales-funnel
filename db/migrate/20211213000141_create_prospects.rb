class CreateProspects < ActiveRecord::Migration[6.1]
  def change
    create_table :prospects do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :stage
      t.string :phone
      t.belongs_to :company, null: false, foreign_key: true
      t.integer :probability

      t.timestamps
    end
  end
end
