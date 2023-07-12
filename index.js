const page_container = document.getElementById('page-container')

let start_id = 1

let selected_page = 0

let app_data = [
    {name:"Untitled",task:[],id:1}    
]
//change_page(1)
const change_page = (id) =>{
    selected_page = id - 1
    let name = ""

    if(app_data[selected_page].name !== "Untitled"){
        name = app_data[selected_page].name
    }

    // name = "Attah"
    // 2 == "2" // True
    // 2 === "2" // False

    // 1 === 2 False
    // 1 !== 2 True

    // True  !True = False
    //False !False = True

    document.getElementById('page_name').value = name
    set_page()
}


//change_page(2)

const set_page = () =>{
    let content = ''

    for (let index = 0; index < app_data.length; index++) {
        const element = app_data[index];
        const className = element.id-1 == selected_page ? "page active" : "page"
        //name = (condition)?(option1):(option2)
        // name = 1 == 2 ? "Emmanuel" : "Joshua"
        content += `
            <div onclick="change_page(${element.id})" class="${className}" id="page_${element.id}">
                ${element.name}
            </div>
        `
    }

    page_container.innerHTML = content
}


const add_page = () =>{
    start_id = start_id + 1
    app_data.push({name:"Untitled",task:[],id:start_id})

    console.log(app_data)
    set_page()
}

const update_page_name = ()=>{
    const page_name = document.getElementById('page_name').value

    app_data[selected_page].name = page_name
    set_page()
}

set_page()