class CompaniesController < ApplicationController

    def index
        companies = Company.all 
        render json: companies
    end

    def show
        company = Company.find(params[:id])
        if Company
            render json: store
        else
            render json: {error: "Company not found"}, status: :unprocessable_entity
        end
    end
    
end