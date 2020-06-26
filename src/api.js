const urlPost = 'https://my-json-server.typicode.com/khanhpro9889/json-server/posts';
const urlComment = 'https://my-json-server.typicode.com/khanhpro9889/json-server/comments';
const urlUser = 'https://my-json-server.typicode.com/khanhpro9889/json-server/users';
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
        let response = await fetch(`${urlComment}?id_post=${idPost}`);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
    console.error(`Error is: ${error}`);
    }
}

async function getUserById(idUser) {
    try {
        let response = await fetch(`${urlUser}/${idUser}`);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
    console.error(`Error is: ${error}`);
    }
}

export { getPost };
export { getCommentByPost };
export { getUserById };