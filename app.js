console.log('start');

// async using callbacks //
function loginUser (email, password, callBack) {
    setTimeout(() => {
        callBack({userEmail: email}) 
    }, 5000)
}

function getUserVideos (email, callback) {
    setTimeout(() => {
        callback(['video1', 'video 2']) 
    }, 1000)
}

const user = loginUser('foo98@mail.com', 12345, user => {
    console.log(user)
    getUserVideos(user.userEmail, videos => {
        console.log(videos)
    })
})

console.log('Finish')

// async callbacks with promises //

console.log('start');

function loginUser (email, password) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        callBack({userEmail: email}) 
    }, 5000)
    })
    
}

function getUserVideos (email) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve(['video1', 'video 2']) 
    }, 1000)
    })
    
}

const user = loginUser('foo98@mail.com', 12345, user => {
    console.log(user)
    getUserVideos(user.userEmail, videos => {
        console.log(videos)
    })
})

loginUser('miz', 'test1')
.then(user => getUserVideos(user.email))
.then(videos => get)

console.log('Finish')

// Promise all //

const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting stuff from youtube')
        resolve({videos: [1,2,3,4,5]})
    }, 2000)
})

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting stuff from facebook')
        resolve({user: "name"})
    }, 5000)
})

Promise.all([yt, fb]).then(result => console.log(result))

// Async await function setup //

async function displayUSer () {
    try{const loggedUSer = await loginUser("miz", 12345);
    const videos = await getUserVideos(loggedUSer.userEmail)
    console.log(videos)
} catch (err) { 
    console.log("something happened")
 }
}