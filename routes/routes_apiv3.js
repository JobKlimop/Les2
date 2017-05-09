/**
 * Created by Thomas on 5/2/2017.
 */

//API - versie 3

var express = require('express');
var router = express.Router();

var users = [
    {
        name : 'Thomas',
        info : {
            email: 't.lucas@student.avans.nl',
            nick: 'JobKlimop'
        }
    },
    {
        name: 'Robin',
        info: {
            email: 'r.schellius@avans.nl',
            nick: 'Bug Fixer'
        }
    }
]

//URL parameters
router.get('/users', function(req, res){
    res.json(users);
})

router.get('/users/:username', function(req, res, next){
    var username = req.params.username || '';

    var user = users.filter(function(u){
        return (u.name === username);
    })
    console.log(user);

    res.json(user);
})

//URL query strings
router.get('/intel/cpu', function(req, res, next){

    var year = req.query.year || '';

    var ma = intel_microarchitecture.filter(function(y){
        return (y.info.year == year);
    })
    console.log(ma);

    res.json(ma);
})

router.get('/help', function(req, res){
    res.json({
        "msg":"Help function"
    })
});

router.get('*', function(req, res){
    res.json({
        "msg":"Thank you for using API V3"
    })
});
module.exports = router;