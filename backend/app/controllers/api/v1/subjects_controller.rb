# // What is JSON?
# // JSON stands for JavaScript Object Notation
# // JSON is a lightweight data interchange format
# // JSON is language independent *
# // JSON is "self-describing" and easy to understand

class Api::V1::SubjectsController < ApplicationController

    
    # exposes to veiw
    def index
    # @ signify instance variables, which are available in all other methods of the instance object.
    #  If in a controller you have
    @subjects = Subject.all
    # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
    render json: @subjects.as_json(only: [:id, :body]), status: 200
    # JSON is language independent 
    end

    def show
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @subject = Subject.find(params[:id])
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
        render json: @subjects.as_json(only: [:id, :body]), status: 200
        # JSON is language independent 
    end

    def create
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @subject = Subject.create(subject_params)
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.
        render json: @subjects.as_json(only: [:id, :body]), status: 200
        # JSON is language independent 
    end
 
    def update
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @subject = Subject.find_by(id: params[:id])
        @subject.update(subject_params)
        @subject.save
        # The :only and :except options can be used to limit the attributes included, and work similar to the attributes method.  
        render json: @subjects.as_json(only: [:id, :body]), status: 200
        # JSON is language independent 
    end

    def destroy
        # @ signify instance variables, which are available in all other methods of the instance object.
        #  If in a controller you have
        @subject = Subject.find_by(id: params[:id])
        @subject.delete
        render json: {subject_id: @subject.id}
        # JSON is language independent 
    end
    private

    def subject_params
        # Allows you to choose which attributes should be permitted for mass updating and thus prevent accidentally 
        #  exposing that which shouldn't be exposed. Provides two methods for this purpose: require and permit.
        #  The former is used to mark parameters as required. The latter is used to set the parameter as permitted and limit 
        #  which attributes should be allowed for mass updating.
        params.require(:subject).permit(:body)
end
end





