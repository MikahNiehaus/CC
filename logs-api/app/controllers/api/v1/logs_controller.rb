#Api::V1 = api only, only sending data and not rendoring veiw
class Api::V1::LogsController < ApplicationController
    def index
    @logs = Log.all
    # binding.pry
    #give json repersentation
    render json: @logs, status: 200
    end

    def show
     
        @log = Log.find(params[:id])
        # binding.pry 
        render json: @log, status: 200
    end

    def create
        # binding.pry
        @log = Log.create(body: params[:_json])

        render json: @log, status: 200
    end
 
    def update
        @log = Log.find(params[:id])
        @log.update(body: log_params)
    # binding.pry

        render json: @log, status: 200
    end

    def destroy
        @log = Log.find(params[:id])
        @log.delete
    # binding.pry
        
        render json: {log_id: @log.id}
    end
    private

    def log_params
        parmas =  params[:_json]
        params.permit(:log, :_json)
end
end
