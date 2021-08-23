const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://demohealthacare.herokuapp.com/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}
exports.search_user = (req, res) =>{
    axios.get('https://demohealthacare.herokuapp.com/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("search_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })  
}
exports.update_user = (req, res) =>{
    axios.get('https://demohealthacare.herokuapp.com/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}