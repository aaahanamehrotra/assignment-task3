const mongoose = require('mongoose')


// id -> A unique identifier for each dweet
// dweet -> The 140 character string
// posted_by -> An arbitrary user-submitted username (there are extra points for authentication/authorization but we don’t expect you to implement it)
// posted_at -> A timestamp denoting when the dweet was posted
// last_updated_at -> A timestamp denoting when the dweet was last updated



const dweetSchema = new mongoose.Schema(
    {
        dweet:{
            type: String,
            required: true
        },
        posted_by:{
            type: String,
            required: true
        },
        posted_at:{
            type: Number,
            required: false
        },
        last_updated_at:{
            type: Number,
            required: false
        }
    }
)

module.exports = mongoose.model('dweetSchema', dweetSchema)