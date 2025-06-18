// FIND за всички колекции:

// USERS

// Всички документи
db.users.find()
// Филтриране по поле (име)
db.users.find({ name: "Alice" })
// Филтриране по няколко полета
db.users.find({ name: "Alice", email: "alice@example.com" })

// PRODUCTS

db.products.find()
// Продукти с цена под 20
db.products.find({ price: { $lt: 20 } })
// Продукти с име и цена
db.products.find({ name: "Vitamin D3", price: 12.99 })

// ORDERS

db.orders.find()
// Поръчки от потребител с ID 1
db.orders.find({ user_id: 1 })
// Поръчки с потребител и продукт
db.orders.find({ user_id: 1, product_id: 1 })

// REVIEWS

db.reviews.find()
// Ревюта с оценка 5
db.reviews.find({ rating: 5 })
// Ревюта от потребител за продукт
db.reviews.find({ user_id: 1, product_id: 1 })

// CATEGORIES

db.categories.find()
// Категория с име
db.categories.find({ name: "Proteins" })
// Категория с конкретно _id и име
db.categories.find({ _id: 1, name: 'Proteins' })

// UPDATE

// Актуализиране на email на потребителя с id: 1
db.users.updateOne(
  { _id: 1 },
  { $set: { email: "alice_new@example.com" } }
)

// DELETE 

// Изтриване на ревю с id: 10
db.reviews.deleteOne({ _id: 10 })

// Изтрива продукти с цена по-малка от 10
db.products.deleteMany({ price: { $lt: 10 } })


// брой поръчки по user_id
db.orders.aggregate([
  {
    $group: {
      _id: "$user_id",
      totalOrders: { $sum: 1 }
    }
  },
  { $sort: { totalOrders: -1 } }
])

// среден рейтинг по продукт
db.reviews.aggregate([
  {
    $group: {
      _id: "$product_id",
      avgRating: { $avg: "$rating" }
    }
  },
  { $sort: { avgRating: -1 } }
])

