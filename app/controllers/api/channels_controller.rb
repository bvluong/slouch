class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.includes(:users).find(params[:id])
    render :show
  end

  def create
      @channel = Channel.new(channel_params)
      if @channel.save
        if params[:channel][:user_id].length > 0
          params[:channel][:user_id].each do |user_id|
            Subscription.create(channel_id: @channel.id, user_id: user_id)
          end
        end
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
  end

  def update
    @channel = Channel.find(params[:id])
    @subscription = Subscription.new(channel_id: params[:id], user_id: current_user.id)
    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :private, :user_id)
  end

end
