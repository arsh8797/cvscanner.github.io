
 const data=[
    {
        name: 'ARSHAD ANSARI',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'AFFAUL ANSARI',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'MIlan',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'SUDHA',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'AAMIR ZEB',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


        // apiData = (json['results'])
        // console.log(json)
        function iterator(data) {
            let dataIndex = 0;
            return {
                next: function () {
                    return dataIndex < data.length ? 
                    { value: data[dataIndex++], done:false} : 
                    { done: true }

                }
            }
        }
        let apiDataStore = iterator(data)
        console.log(apiDataStore)
        // console.log(apiDataStore.next().value)
        // console.log(apiDataStore.next().value)
        // function for grabing amd popup
        let next=document.getElementById("next")
        fetch()
        next.addEventListener('click',fetch)
        function fetch(){
            
            const currenrapiDataStore=apiDataStore.next().value;
            console.log(currenrapiDataStore)
            
            if(currenrapiDataStore!=undefined){
                let image=document.getElementById("image")
                let profile=document.getElementById('profiles')
                profile.innerHTML=`<ul class="list-group">
                <li class="list-group-item">name:${currenrapiDataStore["name"]}</li>
                <li class="list-group-item">age:${currenrapiDataStore.age}</li>
                <li class="list-group-item">current city:${currenrapiDataStore.city}</li>
                <li class="list-group-item">language:${currenrapiDataStore.language}</li>
                <li class="list-group-item">framework:${currenrapiDataStore.framework}</li>
                </ul>`
                image.innerHTML=`<img  src="${currenrapiDataStore.image}" alt=""> `
            }
            else{
                alert('end of profiles')
                window.location.reload()
            }
        }




