console.log("this is cv scanner");
//https://randomuser.me/api/portraits/men/22.jpg
const data = [
    {
        name: 'Shreyansh',
        age: '21',
        city: 'Delhi',
        language: 'C++',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Mohan',
        age: '31',
        city: 'Punjab',
        language: 'Javascript',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: 'Ashwariya',
        age: '28',
        city: 'Delhi',
        language: 'Java',
        framework: 'Swing',
        image: 'https://randomuser.me/api/portraits/women/10.jpg'
    },
    {
        name: 'Arihant',
        age: '19',
        city: 'Las Vegas',
        language: 'JS',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name: 'Mona',
        age: '35',
        city: 'Goa',
        language: 'C++',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/40.jpg'
    }
]
let valueIndex;
function profileIterator(profiles) {
    valueIndex = 0;
    return {
        next: function () {

            if (valueIndex < profiles.length) {
                return { value: profiles[valueIndex++], done: false }
            }
            else {
                return { done: true }
            }
        },
        prev: function () {

                   if (valueIndex > 0) {
                
                    return { value: profiles[--valueIndex] }

            }
            else
            {
                return{done : true}
            }


        }
    }
}

let it = profileIterator(data);
showprofiles();
let next = document.getElementById("next");
next.addEventListener('click', showprofiles)

function showprofiles() {
    let candidates = it.next();
    let profile = document.getElementById("profile");
    let image = document.getElementById("image");
    console.log("i am in forward");
    if (candidates.value != undefined) {
        image.innerHTML = `<img src='${candidates.value.image}'>`;
        profile.innerHTML = `<ul class="list-group">
     <li class="list-group-item">${candidates.value["name"]}</li>
     <li class="list-group-item">${candidates.value["city"]}</li>
     <li class="list-group-item">${candidates.value["age"]}</li>
     <li class="list-group-item">${candidates.value["language"]}</li>
     <li class="list-group-item">${candidates.value["framework"]}</li>

    

  </ul>`;
    }
    else {
        image.innerHTML = " "
        profile.innerHTML = "nothing to show forward"

    }


}

let prev = document.getElementById('prev');
prev.addEventListener('click', prevshow);
function prevshow() {
    console.log("i am in prev");
    let profile = document.getElementById("profile");
    let image = document.getElementById("image");
    let candidates = it.prev();
    if (candidates.value != undefined) {
        image.innerHTML = `<img src='${candidates.value.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${candidates.value["name"]}</li>
        <li class="list-group-item">${candidates.value["city"]}</li>
        <li class="list-group-item">${candidates.value["age"]}</li>
        <li class="list-group-item">${candidates.value["language"]}</li>
        <li class="list-group-item">${candidates.value["framework"]}</li>
   
       
   
     </ul>`;
    }
    else {
        image.innerHTML = " "
        profile.innerHTML = "nothing to show backward"

    }



}