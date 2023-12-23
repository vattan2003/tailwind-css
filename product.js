

// function filter(){
//     var searchValue = document.getElementById('search').value;
//     var products = document.querySelector('section')
//     var Div = products.querySelectorAll('div')


//     for (let i of Div) {
//         var pValue = i.querySelectorAll('p').textcontent;
//         if (pValue.includes(searchValue)) {
//             i.style.display="block"
//         }
//         else {
//             i.class('hidden');
//         }
//     }
// }


 var productcontainer = document.getElementById("product-container")

var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})