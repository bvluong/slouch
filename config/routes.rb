Rails.application.routes.draw do

  namespace :api do
    get 'messages/create'
  end

  namespace :api do
    get 'messages/index'
  end

  namespace :api do
    get 'messages/update'
  end

  namespace :api do
    get 'messages/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :create, :destroy]
  end

  root to: "static_pages#root"
end
