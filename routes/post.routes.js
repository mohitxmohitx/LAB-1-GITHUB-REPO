const router = require("./index.routes");

router.get('/', async (req, res) => {
    await post.getPosts().then(
        posts=> res.json(posts)
    ).catch(
        err=>{
            if(err)
                res.json({
                    message: "Oops! something went wrong",
                    status: 202
                })
        }
    )
})



//one particular post
router.get('/:id', async (req, res) => {
   const id = req.params.id
   await post.getPost(id).then(
    posts=> res.json(post)
   ).catch(
    err=>{
        if(err)
            res.json({
                message: "Oops! something went wrong",
                status: 202
            })
    }
   )
})










