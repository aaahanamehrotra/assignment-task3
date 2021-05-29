const express = require("express") 
const router = express.Router()
const dataDweets = require('./schema')
const uuid = require("uuid")

function findIds(){
    all = dataDweets.find()
    // console.log(typeof)
    const ids = [];
    all.forEach(element => {
        ids.push(element._id)
    });
}



router.get('/', async(req, res) => {
    try{
        const dweets = await dataDweets.find()
        res.json(dweets)
    }catch(err){
        console.log(err)
    }
})

router.post('/create', async(req, res) => {
    const dweet = new dataDweets(
        {
            dweet: req.body.dweet,
            posted_by: req.body.posted_by,
            posted_at: Date.now(),
            last_updated_at: Date.now()
        }
    )
    try{
        const saved = await dweet.save()
        res.json(saved)
    }catch(err){
        console.log(err)
    }
})

router.get('/:id', async(req, res) => {
    allDweets = await dataDweets.find()
    allIds = []
    allDweets.forEach(element => {
        allIds.push(String(element._id))
    })
    if (allIds.includes(req.params.id)){
        try{
            const dweets = await dataDweets.findById(req.params.id)
            res.json(dweets)
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.send("Id not found")
    }
})


router.patch('/:id/update', async(req, res) => {
    allDweets = await dataDweets.find()
    allIds = []
    allDweets.forEach(element => {
        allIds.push(String(element._id))
    })
    if (allIds.includes(req.params.id)){
        try{
            const dweets = await dataDweets.findById(req.params.id)
            dweets.dweet = req.body.dweet
            dweets.last_updated_at = Date.now()
            const updated = await dweets.save()
            res.json(updated)
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.send("Id not found")
    }
})

router.delete('/:id/delete', async(req, res) => {
    allDweets = await dataDweets.find()
    allIds = []
    allDweets.forEach(element => {
        allIds.push(String(element._id))
    })
    if (allIds.includes(req.params.id)){
        try{
            const dweets = await dataDweets.findById(req.params.id)
            const updated = await dweets.remove()
            res.json(updated)
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.send("Id not found")
    }
})




module.exports = router