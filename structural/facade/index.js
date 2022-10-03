// The facade will serve as an interface simplifier.

/* #region  Problem */
function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})
/* #endregion */



/* #region  Solution */
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

function getFetch(url, params = {}) {
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => res.data)
}
/* #endregion */