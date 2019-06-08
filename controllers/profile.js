

const handleProfile = (req,res,db)=>{
    const {id} = req.params;

    db.select('*').from('users').where({id})
        .then(user=>{
            console.log(user[0])
            if (user.length){
                res.json(user[0])
            }  else {
                res.status(404).json('user not found');
            }
        })
        .catch(err=>{res.status(404).json('error getting user');})
}

module.exports = {
    handleProfile:handleProfile
}