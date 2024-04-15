//------------
// interfaces
//------------

interface Author {
    name: string,
    avatar: string;
}

const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' };

interface Post {
    title: string,
    body?: string,
    tags: string[],
    created_at: Date,
    author: Author,
    [key: string]: any,
}

const newPost: Post = {
    title: 'My first post',
    body: 'lorum ipsum',
    tags: ['tech', 'news'],
    created_at: new Date(),
    author: authorOne
};

const newPost2: Post = {
    title: 'My second post',
    tags: ['tech', 'news'],
    created_at: new Date(),
    author: authorOne,
    randomProperty: 'hello'
};


//--------------------------------------
// interfaces as function argumnet type
//--------------------------------------

function createPost(post: Post): void {
    console.log(`Created post '${post.title}' by ${post.author.name}`);
}
createPost(newPost);
createPost(newPost2);


//------------------------
// interfaces with arrays
//------------------------

let posts: Post[] = [];
posts.push(newPost);