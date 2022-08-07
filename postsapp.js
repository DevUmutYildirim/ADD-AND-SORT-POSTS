

const posts = [
    {author: "Author 1", post: "Post 1"},
    {author: "Author 2", post: "Post 2"},
    {author: "Author 3", post: "Post 3"},
    {author: "Author 4", post: "Post 4"},
    {author: "Author 5", post: "Post 5"}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.author,post.post)
    })
}

const addPost = (newPost) => {

    const postPromise = new Promise((resolve,reject) => {
        posts.push(newPost);
        resolve(posts)
        //reject("Post Couldn't be added")
    })
    return postPromise;
};

async function showPosts() {
    try{
        await addPost({author:"Author 10", post:"Post 10"});
        listPosts();
    } catch(error) {
        console.log(error);
    }
}

showPosts();