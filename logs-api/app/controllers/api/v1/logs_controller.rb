#Api::V1 = api only, only sending data and not rendoring veiw
class Api::V1::LogsController < ApplicationController
    def index
    @logs = Log.all
    #give json repersentation
    render json: @logs, status: 200
    end

    def show 
        @log = Log.find(params[:id])
        render json: @log, status: 200
    end

    def create
        # binding.pry
        @log = Log.create(params[:log][:body])
      
      
        render json: @log, status: 200
    end
 
    def update
        @log = Log.find(params[:id])
        @log.update(params[:log][:body])
        render json: @log, status: 200
    end

    def destroy
        @log = Log.find(params[:id])
        @log.delete
        
        render json: {log_id: @log.id}
    end
    private

    def log_params
        params.permit(:log)
        # binding.pry
        return true
end
end
