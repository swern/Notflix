class SessionsController < Devise::SessionsController

  respond_to :json
  # overrides Devise controllers to only respond to json

end