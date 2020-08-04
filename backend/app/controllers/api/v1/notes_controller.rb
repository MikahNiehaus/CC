# // What is JSON?
# // JSON stands for JavaScript Object Notation
# // JSON is a lightweight data interchange format
# // JSON is language independent *
# // JSON is "self-describing" and easy to understand
class Api::V1::NotesController < ApplicationController
    def index
        #  binding.pry
    @notes = Note.all
    
    #give json repersentation
    render json: @notes, status: 200
    # JSON is language independent 
    end

    def show
        # binding.pry 
        @note = Note.find(note_params)
          
        render json: @note, status: 200
        # JSON is language independent 
    end

    def create
          
        @note = Note.create(note_params)
        # binding.pry
           
        render json: @note, status: 200
        # JSON is language independent 
    end
 
    def update
        #  binding.pry
        @note = Note.find_by(body: params[:id])
        @note.update(note_params)
      
        @note.save
          
        render json: @note, status: 200
        # JSON is language independent 
    end

    def destroy
        #  binding.pry
        @note = Note.find_by(body: params[:id])
        @note.delete
         
        render json: {note_id: @note.id}
        # JSON is language independent 
    end
    private

    def note_params
        #   binding.pry

        # parmas =  params[:body]
        # params.permit(:note, :body)
        params.require(:note).permit(:body,:subject_id)
end
end






