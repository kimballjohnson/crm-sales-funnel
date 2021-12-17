class ProspectsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :verify_authenticity_token

    def index
        prospects = Prospect.order('last_name ASC') 
        render json: prospects
    end

    def show
        prospect = Prospect.find(params[:id])
        if prospect
            render json: prospect, include: :company
        else
            render json: {error: "Prospect not found"}, status: :unprocessable_entity
        end
    end

    def create 
        prospect = Prospect.create(prospect_params)
        render json: prospect
    end

    def update
        prospect = Prospect.find(params[:id])
        prospect.update(prospect_params)
        render json: prospect
    end

    def destroy
        prospect =Prospect.find(params[:id])
        prospect.delete
    end
    
    private
    
    def prospect_params
        params.permit(:first_name, :last_name, :email, :stage, :phone, :company_id, :probability)
    end
end
