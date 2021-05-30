console.log('cv screener')
function fun() {

    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(json => {
            let apiData = json["results"][0]
            console.log(apiData)
            let apiStore = ""
            // apiStore=`this dob is ${apiData}`
            // apiData.forEach(element => {
            //     apiStore = `<li>${element}</li>`


            // });
            apiStore = `<p>dob is ${apiData.dob.date}, name is ${apiData.name.first} her pic is ${apiData.picture.large}</p>`
      
            let api = document.getElementById('api')
            console.log(JSON.stringify(apiStore))
            api.innerHTML=JSON.stringify(apiStore)
        })
}
fun()

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]