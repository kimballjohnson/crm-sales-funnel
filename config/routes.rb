Rails.application.routes.draw do
  resources :prospects
  resources :companies
  resources :tests

  root  'users#index'  # add this one line



    # Display the user list 

    get '/users', to: 'users#index'

    # new posts (registration screen) to transition 

    get '/users/new', to: 'users#new'

    # receive the posted data 

    post '/users', to: 'users#create'



    # Go to the screen to edit the data that was posted 

    get '/users/:id/edit', to: 'users#edit'



    #Transit to edit completion screen 

    patch 'users/:id', to: 'users#update'



    # Delete a post 

    delete '/users/:id', to:'users#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
