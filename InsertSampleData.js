const mongoose = require('mongoose');
require('dotenv').config();
const AwlModel = require('./models/AwlModel');

async function insertSampleData() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        const sampleRecord = new AwlModel({ gatepassNumber: 1 });
        await sampleRecord.save();
        
        console.log('Sample data inserted');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        await mongoose.disconnect();
    }
}

insertSampleData();