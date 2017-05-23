class ReactionsController < ApplicationController
  def create
    @reaction = current_user.reactions.new(reactions_params)
    if @reaction.save
  end

  def destroy
  end

  private

  def reaction_params
    params.require(:reaction).permit(:user_id, :message_id, :emoji)
  end

end
