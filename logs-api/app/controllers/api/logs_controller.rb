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
        @log = Log.create(log_params)
        render json: @log, status: 200
    end

    def update
        @log = Log.find(params[:id])
        @log.update(log_params)
        render json: @log, status: 200
    end

    def destroy
        @log = Log.find(params[:id])
        @log.delete
        render json: {log_id: @log.id}

    private

    def log_params
        params.reqire(:log).permit(:title, :text, :created_at)
end
