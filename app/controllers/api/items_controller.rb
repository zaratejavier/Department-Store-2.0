class Api::ItemsController < ApplicationController
  def index
    d = Department.find(params[:department_id])
    render json: d.items
  end

  def create
    department = Department.find(params[:department_id])
    item = department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors, status: 422 }
    end
  end

  def update
    item = Item.find(params[:id])
    if item.update(item_params)
      render json: item
    else
      render json: { errors: item.errors, status: 422 }
    end
  end

  def destroy
    item = Item.find(params[:id]).destroy
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
