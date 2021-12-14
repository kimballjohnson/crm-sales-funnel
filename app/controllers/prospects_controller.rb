class ProspectsController < ApplicationController
    def index
        prospects = Prospect.all 
        render json: prospects
    end
end
