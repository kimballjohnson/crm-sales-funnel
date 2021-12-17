Rails.application.routes.draw do
  resources :prospects
  resources :companies
  resources :tests

  get "/companies/unemployed", to: "companies#unemployed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
