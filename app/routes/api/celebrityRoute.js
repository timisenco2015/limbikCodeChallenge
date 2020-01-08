const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();

const celebrityRepo = require('../../repo/celebrityRepo');

    //insert data from the celebrity json file in data folder into the database
    celebrityRepo.populateTable()

const flatCache = require('flat-cache')
let cache = flatCache.load(process.env.MEMOCACHEFILELOCATION);
let flatCacheMiddleware = (req,res, next) => {
    let key =  '__express__' + req.originalUrl || req.url
    let cacheContent = cache.getKey(key);
    if( cacheContent){
        res.send( cacheContent );
    }else{
        res.sendResponse = res.send
        res.send = (body) => {
            cache.setKey(key,body);
            cache.save();
            res.sendResponse(body)
        }
        next()
    }
};




router.get('/celebrity/getAll',flatCacheMiddleware, async (req, res) => {
    try {
        
        const success = await celebrityRepo.getAllList(req, res);
        console.log("r");
        res.status(success.status).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;