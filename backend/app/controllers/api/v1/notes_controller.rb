# // What is JSON?
# // JSON stands for JavaScript Object Notation
# // JSON is a lightweight data interchange format
# // JSON is language independent *
# // JSON is "self-describing" and easy to understand
class Api::V1::NotesController < ApplicationController
   
    # exposes to veiw
    def index
    # @ signify instance variables, which are available in all other methods of the instance object.
    #  If in a controller you have
    @notes = Note.all
    #give json repersentation
    # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
    render json: @notes.as_json(only: [:id, :body, :subject_id]), status: 200
    # JSON is language independent 
    end

    def show
        # binding.pry 
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @note = Note.find(note_params)
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
           
        render json: @notes.as_json(only: [:id, :body, :subject_id]), status: 200
        # JSON is language independent 
    end

    def create
          # @ signify instance variables, which are available in all other methods of the instance object.
    #  If in a controller you have
        @note = Note.create(note_params)
        # binding.pry
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
           
        render json: @notes.as_json(only: [:id, :body, :subject_id]), status: 200
        # JSON is language independent 
    end
 
    def update
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @note = Note.find_by(body: params[:id])
        @note.update(note_params)
        @note.save
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
        render json: @notes.as_json(only: [:id, :body, :subject_id]), status: 200
        # JSON is language independent 
    end

    def destroy
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @note = Note.find_by(body: params[:id])
        @note.delete
        render json: {note_id: @note.id}
        # JSON is language independent 
    end
    private

    def note_params
        # Allows you to choose which attributes should be permitted for mass updating and thus prevent accidentally 
        #  exposing that which shouldn't be exposed. Provides two methods for this purpose: require and permit.
        #  The former is used to mark parameters as required. The latter is used to set the parameter as permitted and limit 
        #  which attributes should be allowed for mass updating.
        params.require(:note).permit(:body,:subject_id)
end
end






