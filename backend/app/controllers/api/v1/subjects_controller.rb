class Api::V1::SubjectsController < ApplicationController
    def index
        # binding.pry
    @subjects = Subject.all
    
    #give json repersentation
    render json: @subjects, status: 200
    # JSON is language independent 
    end

    def show
    #    binding.pry 
        @subject = Subject.find(params[:id])
          
        render json: @subject, status: 200
        # JSON is language independent 
    end

    def create
        #  binding.pry
        @subject = Subject.create(subject_params)
       
           
        render json: @subject, status: 200
        # JSON is language independent 
    end
 
    def update
        #  binding.pry
        @subject = Subject.find_by(body: params[:id])
        @subject.update(subject_params)
      
        @subject.save
          
        render json: @subject, status: 200
        # JSON is language independent 
    end

    def destroy
        #  binding.pry
        @subject = Subject.find_by(body: params[:id])
        @subject.delete
         
        render json: {subject_id: @subject.id}
        # JSON is language independent 
    end
    private

    def subject_params
        #   binding.pry

        # parmas =  params[:body]
        # params.permit(:subject, :body)
        params.require(:subject).permit(:body)
end
end





