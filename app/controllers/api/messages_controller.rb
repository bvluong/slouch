class Api::MessagesController < ApplicationController

  def index
    @messages = Message.includes(:user).where(channel_id: params[:channel_id])
  end

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def create
    @message = current_user.messages.new(message_params)
    if @message.save
      render :show
    end
  end


  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id, :user_id)
  end
end
