class Note < ApplicationRecord
   # The belongs_to association creates a one-to-one match with another model. 
   #   In database terms, this association says that this class contains the foreign key.
   belongs_to :subject
end


