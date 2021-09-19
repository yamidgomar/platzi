exports.sucess = function(req, res, message){
    //res.send(message)
    res.send({
        error:"",
        body:message
    })
} 

exports.error = function(req, res){

}
