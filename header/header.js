var header_data = {
    header_title:[
        "You're Tresspassing!",
        "The Dog",
        "Do the Dishes",
        "Chores"
    ]
}

function change_header(){
    document.querySelector(".header_title").innerHTML = header_data.header_title[slider_data.sceneNum];
}