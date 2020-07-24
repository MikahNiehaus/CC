Rails.application.routes.draw do
  # For details on the DSL available within this subject, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :notes
    end
  end
  namespace :api do
    namespace :v1 do
      resources :subjects
    end
  end
end


