const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  order_id: { type: String, required: true, unique: true },
  order_date: { type: Date, default: Date.now },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
