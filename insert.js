use ecommerce_db

// Вкарваме 5-те колекции
db.createCollection('users')
db.createCollection('products')
db.createCollection('orders')
db.createCollection('reviews')
db.createCollection('categories')

// 10 Документа в колекцията 'users'
db.users.insertMany([
    { "_id": 1, "name": "Alice", "email": "alice@example.com" },
    { "_id": 2, "name": "Bob", "email": "bob@example.com" },
    { "_id": 3, "name": "Charlie", "email": "charlie@example.com" },
    { "_id": 4, "name": "Diana", "email": "diana@example.com" },
    { "_id": 5, "name": "Eve", "email": "eve@example.com" },
    { "_id": 6, "name": "Frank", "email": "frank@example.com" },
    { "_id": 7, "name": "Grace", "email": "grace@example.com" },
    { "_id": 8, "name": "Hank", "email": "hank@example.com" },
    { "_id": 9, "name": "Ivy", "email": "ivy@example.com" },
    { "_id": 10, "name": "Jake", "email": "jake@example.com" }
])

// 10 Документа в колекцията 'products'
db.products.insertMany([
    { "_id": 1, "name": "Whey Protein", "price": 29.99 },
    { "_id": 2, "name": "Vitamin D3", "price": 12.99 },
    { "_id": 3, "name": "Creatine", "price": 19.99 },
    { "_id": 4, "name": "Multivitamins", "price": 15.99 },
    { "_id": 5, "name": "Fish Oil", "price": 9.99 },
    { "_id": 6, "name": "BCAA", "price": 24.99 },
    { "_id": 7, "name": "Zinc", "price": 8.99 },
    { "_id": 8, "name": "Magnesium", "price": 10.99 },
    { "_id": 9, "name": "Pre-Workout", "price": 34.99 },
    { "_id": 10, "name": "Electrolytes", "price": 5.99 }
])

// 10 Документа в колекцията 'orders'
db.orders.insertMany([
  { "_id": 1, "user_id": 1, "product_id": 1 },
  { "_id": 2, "user_id": 2, "product_id": 2 },
  { "_id": 3, "user_id": 3, "product_id": 3 },
  { "_id": 4, "user_id": 4, "product_id": 4 },
  { "_id": 5, "user_id": 5, "product_id": 5 },
  { "_id": 6, "user_id": 6, "product_id": 6 },
  { "_id": 7, "user_id": 7, "product_id": 7 },
  { "_id": 8, "user_id": 8, "product_id": 8 },
  { "_id": 9, "user_id": 9, "product_id": 9 },
  { "_id": 10, "user_id": 10, "product_id": 10 }
])

// 10 Документа в колекцията 'reviews'
db.reviews.insertMany([
  { "_id": 1, "user_id": 1, "product_id": 1, "rating": 5 },
  { "_id": 2, "user_id": 2, "product_id": 2, "rating": 4 },
  { "_id": 3, "user_id": 3, "product_id": 3, "rating": 5 },
  { "_id": 4, "user_id": 4, "product_id": 4, "rating": 3 },
  { "_id": 5, "user_id": 5, "product_id": 5, "rating": 4 },
  { "_id": 6, "user_id": 6, "product_id": 6, "rating": 5 },
  { "_id": 7, "user_id": 7, "product_id": 7, "rating": 3 },
  { "_id": 8, "user_id": 8, "product_id": 8, "rating": 4 },
  { "_id": 9, "user_id": 9, "product_id": 9, "rating": 5 },
  { "_id": 10, "user_id": 10, "product_id": 10, "rating": 2 }
])

// 10 Документа в колекцията 'categories'
db.categories.insertMany([
  { "_id": 1, "name": "Proteins" },
  { "_id": 2, "name": "Vitamins" },
  { "_id": 3, "name": "Minerals" },
  { "_id": 4, "name": "Pre-Workouts" },
  { "_id": 5, "name": "Post-Workouts" },
  { "_id": 6, "name": "Health" },
  { "_id": 7, "name": "Recovery" },
  { "_id": 8, "name": "Hydration" },
  { "_id": 9, "name": "Energy" },
  { "_id": 10, "name": "Strength" }
])
