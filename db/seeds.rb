Department.destroy_all
Item.destroy_all

10.times do
  depart = Department.create(name: Faker::Commerce.department)
  3.times do 
    depart.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price,
    )
  end
end

puts "Deparment seed size is #{Department.all.size}"
puts "Items seed size is #{Item.all.size}"