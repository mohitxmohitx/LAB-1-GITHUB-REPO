function mustBeInteger(req,res,next){

    const id = req.params.id;

    if(!Number.isInteger(parseInt(id))){
        res.status(400).json({message: 'ID must be in int'})
    }else{
        next();
    }
}

function checkFieldsPost(req, res, next){

    const {title, content, tags} = post

    if(title && content && tags){
        next()
    }else{
        res.status(400).json({message: 'Fields should no be empty'});
    }

    module.exports = {
        mustBeInteger,
        checkFieldsPost
    };
}