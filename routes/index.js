var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/strassenschaden', function(req, res, next) {
    var db = req.db;
    var strassenschaeden = db.get("strassenschaeden");
    strassenschaeden.find({}, function(err, result) {
        if (err) res.json(err);
        if (result.length > 0) {
            res.json(result);
        } else {
            res.json({'message':'Keine Straßenschäden vorhanden'});
        }
    });
});

/* Post . */
router.post('/strassenschaden', function(req, res, next) {
    var db = req.db;
    var strassenschaeden = db.get("strassenschaeden");

    var promise = strassenschaeden.insert(req.body);

    promise.error(function(err){
        res.send(err);
    });
    promise.success(function(doc){
        res.json({ message: 'Straßenschaden erfolgreich eingetragen' });
    });

});

module.exports = router;
