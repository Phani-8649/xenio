const mongoose = require('mongoose');

const communicationsLogSchema = new mongoose.Schema({
  campaign_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['SENT', 'FAILED'], default: 'SENT' }
});

module.exports = mongoose.model('CommunicationsLog', communicationsLogSchema);
