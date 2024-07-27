const mongoose = require('mongoose');
const Counter = require('./counterModel'); // Adjust the path as needed

const AwlSchema = new mongoose.Schema({
    gatepassNumber: { type: Number, unique: true },
    type: String,
    partyName: String,
    batchnumber: String,
    trucknumber: String,
    weight: Number,
    category: String,
    subcategories: String,
    subsubcategories: String,
    otherSubsubcategories: String,
    numberOfBags: Number,
    perbagprice: Number,
    productValue: Number,
    perKgRate: Number,
    loadingCharger: Number,
    cgst: Number,
    sgst: Number,
    weightOfTruck: Number,
    totalValue: Number,
    totalWeight: Number,
    perqtlrate: Number,
    totalamount: Number,
    weight1: Number,
    category1: String,
    subcategories1: String,
    subsubcategories1: String,
    otherSubsubcategories1: String,
    numberOfBags1: Number,
    perbagprice1: Number,
    productValue1: Number,
    perKgRate1: Number,
    loadingCharger1: Number,
    cgst1: Number,
    sgst1: Number,
    weight1OfTruck1: Number,
    totalValue1: Number,
    totalWeight11: Number,
    perqtlrate1: Number,
    totalamount1: Number,
    weight2: Number,
    category2: String,
    subcategories2: String,
    subsubcategories2: String,
    otherSubsubcategories2: String,
    numberOfBags2: Number,
    perbagprice2: Number,
    productValue2: Number,
    perKgRate2: Number,
    loadingCharger2: Number,
    cgst2: Number,
    sgst2: Number,
    weight2OfTruck2: Number,
    totalValue2: Number,
    totalWeight2: Number,
    perqtlrate2: Number,
    totalamount2: Number,
    weight3: Number,
    category3: String,
    subcategories3: String,
    subsubcategories3: String,
    otherSubsubcategories3: String,
    numberOfBags3: Number,
    perbagprice3: Number,
    productValue3: Number,
    perKgRate3: Number,
    loadingCharger3: Number,
    cgst3: Number,
    sgst3: Number,
    weight3OfTruck3: Number,
    totalValue3: Number,
    totalWeight3: Number,
    perqtlrate3: Number,
    totalamount3: Number,
    TotalGatepassWeight: Number,
    TotalGatepassAmount: Number,
    TotalGatepassTruckWeight: Number,
    TotalTruckWeight: Number,
    TotalTruckWeight1: Number,
    TotalTruckWeight2: Number,
    TotalTruckWeight3: Number
}, {
    timestamps: true
});

AwlSchema.pre('save', async function (next) {
    if (this.isNew) {
        const counterId = `gatepassNumber_${this.type}`;
        const counter = await Counter.findByIdAndUpdate(
            { _id: counterId },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.gatepassNumber = counter.sequence_value;
    }
    next();
});

const AwlModel = mongoose.model('AwlformData', AwlSchema);

module.exports = AwlModel;
