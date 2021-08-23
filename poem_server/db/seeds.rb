puts "Deleting movie/actor data..."
Author.destroy_all
Poem.destroy_all
User.destroy_all

puts "🌱 Seeding authors..."
plath = Author.create(author_name: 'Sylvia Plath')

puts "🌱 Seeding users..."
daniel = User.create(username: 'Daniel Ezekiel')

puts "🌱 Seeding poems..."
Poem.create(title: 'Lady Lazarus', poem_content: ' I have done it again.', author_id: plath.id, user_id: daniel.id)

puts "✅ Done seeding!"
