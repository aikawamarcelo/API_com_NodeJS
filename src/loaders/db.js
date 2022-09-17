const mongoose = require('mongoose')

async function startDB(){
    await mongoose.connect('mongodb+srv://marcelo:marcelofatec2017@atlascluster.ansqzoe.mongodb.net/test')
}

module.exports = startDB