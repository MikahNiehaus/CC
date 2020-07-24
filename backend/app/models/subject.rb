class Subject < ApplicationRecord
    # A has_many association indicates a one-to-many connection with another model.
    #  You'll often find this association on the "other side" of a belongs_to association.
    #  This association indicates that each instance of the model has zero or more instances of another model. 
    has_many :notes
end


