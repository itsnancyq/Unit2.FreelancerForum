// create array of given freelancers with occupation, and price
const freelancers = [
    { name: "Alice", occupation: "Writer", price: "30" },
    { name: "Bob", occupation: "Teacher", price: "50" },
    { name: "Carol", occupation: "Programmer", price: "70" },
];

// create an array of new possible freelancers with occupation and price
const newFreelancers = [
    { name: "Taylor", occupation: "Musician", price: "13" },
    { name: "Gordan", occupation: "Chef", price: "60"},
    { name: "Bernie", occupation: "Emotional Support Cat", price: "10"},
];


// create an initial function
function init() {

    const root = document.querySelector("#root")
    console.log(root)


// create an h1 element called "Freelancer Forum"
    const h1 = document.createElement("h1")
    console.log(h1)

    h1.innerHTML = "Freelancer Forum"

    root.append(h1)


// add container div to hold freelancers in 
    const freelancerContainer = document.createElement("div")
    freelancerContainer.id = "freelancerContainer"
    // console.log(petsContainer.id)
    freelancerContainer.classList.add("freelancers")
    // console.log(petsContainer.petsList)
    root.append(freelancerContainer)


// call the renderFreelancers function that was created
    renderFreelancers()
}


// create a function to render the freelancers in the freelancer array
function renderFreelancers(){
    // create a <p> element called "average price"
    const avg = document.querySelector("#average")
    const p = document.createElement("p")
    console.log(p)

    p.innerHTML = `Average Price is $${averagePrice(freelancers)}`

    avg.replaceChildren(p)
    const container = document.querySelector("#freelancerContainer")
    container.innerHTML = ""

// looped over the freelancers array, created class for freelancer, 
    freelancers.forEach((freelancers) => {
        const freelanceDiv = document.createElement("div")
        freelanceDiv.classList.add("freelancer")
        freelanceDiv.innerHTML = `<span><strong>Name: </strong> ${freelancers.name}</span>
                                <span><strong>Occupation: </strong> ${freelancers.occupation}</span>
                                <span><strong>Price: </strong> ${freelancers.price}</span>`
    
        container.append(freelanceDiv)
    })
}


// create function that adds the new freelancers 
const addFreelancer = () => {
    const randomIndex = Math.floor(Math.random() * newFreelancers.length)
    console.log(randomIndex)
    const newFreelancer = newFreelancers[randomIndex]
    freelancers.push(newFreelancer)
    renderFreelancers();
}


// create an interval to add a new freelancer every few seconds
const add = setInterval(addFreelancer, 3000)

// create timeout interval
setTimeout(() => {
    clearInterval(add)
}, 10000)


// // create funtion that calculates the average price of the freelancers
function averagePrice(freelancers) {
    let total = 0
    for (let i = 0; i < freelancers.length; i++) {
        total += Number(freelancers[i].price)
    }
    return (total / freelancers.length).toFixed(2)
}

console.log(averagePrice(freelancers));



// call init function
init();
renderFreelancers();

