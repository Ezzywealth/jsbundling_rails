class ChangeMessageColumnToGreetings < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :message, :greetings
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
