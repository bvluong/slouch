Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy, :update, :show]
    resources :channels, only: [:index, :show, :create, :destroy] do
      resources :messages, only: [:index]
    end
  end

  root to: "static_pages#root"
end
