class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      (0..7).step do |channel_id|
        @user.subscriptions.create(channel_id: channel_id)
      end
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:channels).find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
