class ReactionsController < ApplicationController
  def create
    @reaction = current_user.reactions.new(reactions_params)
    if @reaction.save
      @message = @reaction.message
      render "api/messages/#{@message.id}"
    else
      render json: @reaction.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def reaction_params
    params.require(:reaction).permit(:user_id, :message_id, :emoji)
  end

end
