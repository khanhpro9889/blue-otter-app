const urlPost = 'https://jsonplaceholder.typicode.com/posts';
const urlComment = 'https://jsonplaceholder.typicode.com/comments';

async function getPost() {
    try {
    let response = await fetch(urlPost);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is: ${error}`);
  }
}

async function getCommentByPost(idPost) {
    try {
        let response = await fetch(`${urlComment}?postId=${idPost}`);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
    console.error(`Error is: ${error}`);
    }
}

export { getPost };
export { getCommentByPost };