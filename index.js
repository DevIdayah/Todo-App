const page_container = document.getElementById('page-container')

let start_id = 1

let app_data = []

const set_page = () =>{
    let content = ''

    for (let index = 0; index < app_data.length; index++) {
        const element = app_data[index];
        content += `<div class="page" id="page_${element.id}">${element.name}</div>`
    }

    page_container.innerHTML = content
}


const add_page = () =>{
    //getting child content
    // const prev_content = page_container.innerHTML 

    // //setting child content
    // page_container.innerHTML = prev_content + '<div class="page">Untitled</div>'

    start_id = start_id + 1
    app_data.push({name:"Untitled",task:[],id:start_id})

    console.log(app_data)
    set_page()
}