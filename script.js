// menubar Activating

function slide_nav() {
    document.getElementById('slide_nav').style.marginLeft = "90%"

    // document.getElementById('slide_nav').classList.toggle('showSlideNavigation')
}

function close_nav() {
    document.getElementById('slide_nav').style.marginLeft = "100%"
}



// function entervalue() {
//     var inputValue = document.getElementById('input').value

//     var h1List = document.querySelectorAll('h1')
//     for (i of h1List) {
//         var tagList = i.textContent
//         if(tagList.includes(inputValue)){
//             i.style.display="flex"
//         }
//         else{
//             i.style.display="none"
//         }
//     }
// }
