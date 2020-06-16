class Api::DepartmentsController < ApplicationController
  before_action :set_deparment, only: [:show, :update, :destroy]

  def index
    render json: Deparment.all
  end

  def show
  end

  def update
  end

  def destroy
  end

  private 
  def set_deparment
   @deparment = Deparment.find(params[:id])
  end
end
