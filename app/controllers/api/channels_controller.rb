class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render json: @channels
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.create(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description)
  end

end