class Api::DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :destroy]

  def index
    render json: Department.all
  end

  def show
  end

  def create
    deparment = Department.new(deparment_params)

    if deparment.save
      render json: deparment
    else
      render json: deparment.errors, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private 
  def set_department
   @deparment = Department.find(params[:id])
  end
end
