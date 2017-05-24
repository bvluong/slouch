class Api::ReactionsController < ApplicationController
  def create
    @reaction = current_user.reactions.new(reaction_params)
    if @reaction.save
      @message = @reaction.message
      render "api/messages/show"
    else
      render json: @reaction.errors.full_messages, status: 422
    end
  end

  def destroy
    @reaction = Reaction.find(params[:id])
    @message = @reaction.message
    @reaction.destroy
    render "api/messages/show"
  end

  private

  def reaction_params
    params.require(:reaction).permit(:user_id, :message_id, :emoji)
  end

end
