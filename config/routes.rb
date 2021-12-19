Rails.application.routes.draw do
  namespace :api do

  resources :prospects
  resources :companies
  resources :tests

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end