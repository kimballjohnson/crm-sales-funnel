class CompaniesController < ApplicationController
    wrap_parameters format: []

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

    def create 
        company = Company.create(company_params)
        render json: company
    end
    
    private
    
    def company_params
        params.permit(:name)
    end

end