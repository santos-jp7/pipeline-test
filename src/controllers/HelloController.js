const sayHello = require("../utils/sayHello");

module.exports = (req, res) => {
    const {name} = req.query;
    
    return res.send(sayHello());
}