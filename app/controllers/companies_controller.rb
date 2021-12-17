class CompaniesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :verify_authenticity_token

    def index
        companies = Company.order('name ASC') 
        render json: companies
    end

    def show
        company = Company.find(params[:id])
        if company
            render json: company, include: :prospects
        else
            render json: {error: "Company not found"}, status: :unprocessable_entity
        end
    end

    def update
        company = Company.find(params[:id])
        company.update(company_params)
        render json: company
    end

    def create 
        company = Company.create(company_params)
        render json: company
    end

    def destroy
        company = Company.find(params[:id])
        company.destroy
    end
    
    private
    
    def company_params
        params.permit(:name)
    end

end