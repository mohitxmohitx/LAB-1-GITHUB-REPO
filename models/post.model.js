//imports
const helper = require("../helper.js");

//variables
const filename = "../data/post.json";

//Array
let posts = require(filename);

//READ
const getPosts = ()=>{
  //ALL POSTS
  //array is null
  //if else
  return new Promise((resolve,reject)=>{
    // BL 
    if(posts.length === 0){
        //reject
        reject({
            message: "Sorry, No posts available  to display!",
            status: 202
        })
    }else{
        //resolved
        resolve(posts)
    }
  })
}
const getpost = (id)=>{
    // one particular post
    // index of the element by traversing through the array
    // SIMILAR CODE LOGIC array.find(r.id == id)
    return Promise(
        (resolve,reject)=>{
            helper.mustBeInArray(post,id)
            .then(post=>resolve(post))
            .catch(err=>reject(err))
        }
    )
}

const insertPost = (newPost)=>{
    //insert
    //array.push() -> id should be unique -> getNewId
    return new Promise(
        (res,rej)=>{
            //ID
            const id = {id: helper.getNewId(posts)};

            //Dates
            const date ={
                createdAt:helper.getDate(),
                updatedAt:helper.getDate()
            }

            newPost = {...id, ...date, ...newPost}

            posts.push(newPost)

            helper.writeJSONFile(filename,posts);
            res(newPost,200);
            
        }
    )
}

const updatePost = (id,newPost)=>{
    //update 

    //Index of the element
    //Replace element
    return new Promise(
        (resolve, reject)=>{
            helper.mustBeInArray(posts,id)
            .then(
                post=>{
                    const index = posts.findIndex(p=> p.id == post.id)
                    id = {id:post.id}
                    
                    //Dates
                    const date = {
                        createdAt:post.createdAt,
                        updatedAt:helper.newDate()
                    }

                    posts[index] = {...id, ...date, ...newPost}

                    helper.writeJSONFile(filename,posts);
                    resolve(posts[index])
                }
            )
            .catch(err=>reject(err));
        }
    )
}


const deletePost = (id)=>{ 
//delete
//Index of the element
// Delete Element

return new Promise((resolve,reject)=>{
    helper.mustBeInArray(posts,id)
    .then(
        ()=>{
            posts = posts.filter(p=> p.id !== post.id)
            helper.writeJSONFile(filename,posts);
            resolve()
        }
    )
    .catch(err=>reject(err))
});
}