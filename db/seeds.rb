Test.destroy_all
Prospect.destroy_all
Company.destroy_all

require 'csv'

CSV.read(Rails.root.join('lib', 'seeds', 'code_challenge.csv'), headers: true).each do |row|
    t = Test.create(row.to_hash)
    puts "#{t.first_name}, #{t.last_name} saved"
  end

  puts "#{Test.count} employees saved"


  Test.all.each do |test|
    Company.create(
        name: test.company
    )
end
puts "#{Company.count} companies saved"

Test.all.each do |employee|
    Prospect.create!(
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        stage: employee.stage,
        phone: employee.phone,
        company_id: Company.find_by_name(employee.company).id,
        probability: employee.probability
    )
end

puts "#{Prospect.count} employees saved"
