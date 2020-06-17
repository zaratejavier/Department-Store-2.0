# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.destroy_all
Item.destroy_all

10.times do |i|
  depart = Department.create(name:Faker::Commerce.department)
  3.times do |j|
    depart.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
    )
  end
end

puts "Deparment seed size is #{Department.all.size}"
puts "Items seed size is #{Item.all.size}"