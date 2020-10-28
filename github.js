fetch('https://api.github.com/users/anonyymous')
.then(response => {
    return response.json();
})
.then(githubData => {
    const rubenObj = {
        bio: githubData.bio, // grabs the bio key from the github data
        username: githubData.login,
        name: githubData.name
    }
    //console.log(rubenObj);

    const newElement = document.createElement('p');  // this makes a new element <p></p>
        newElement.textContent = rubenObj.username;     //  and sets the value to the name
        container.appendChild(newElement);         //   and appends that to the parent container
})
.catch(error => {
    //console.log(error);
})

// fetch('https://api.github.com/users/anonyymous')
// .then(response => {
//     return response.json();
// })
// .then(githubData => {
//     console.log(githubData);
// })
// .catch(error => {
//     console.log(error);
// })