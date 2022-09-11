// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongToMany(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'name?'
})
// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'name?'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'name?'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
