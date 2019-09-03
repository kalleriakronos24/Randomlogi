module.exports = (req, res) => {
    if(!req.body.usr_name){
        res.status(500);
    }
}