fetch('https://api.spacexdata.com/v3/capsules')
.then (response =>{
    return response.json();
})
.then(spaceXData => { //this ia where you would name the data
    //console.log(spaceXData);
})
.catch(error => {
    //console.log(error);
})

fetch('https://api.spacexdata.com/v3/dragons/dragon1')
.then (response =>{
    return response.json();
})
.then (spaceXDragonData => { //this ia where you would name the data
    //console.log(spaceXDragonData);
})
.catch(error => {
    //console.log(error);
})

fetch('https://api.spacexdata.com/v3/landpads/LZ-4')
.then (response => {
    return response.json();
})
.then (data => { //this ia where you would name the data
    //console.log(data);
})
.catch(error => {
    //console.log(error);
})

fetch('https://api.spacexdata.com/v3/history/1')
.then (response => {
    return response.json();
})
.then (missionData => { //this ia where you would name the data
    //console.log(missionData);
})
.catch(errors => {
    //console.log(errors);
})