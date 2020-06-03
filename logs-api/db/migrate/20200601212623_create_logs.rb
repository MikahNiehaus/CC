class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      # t.string :title
      # t.string :text
      t.string :body
      t.timestamps
    end
  end
end
