//This function takes the name from a list and makes the others dissappear.

// function myFunction() {
//     var txtValue;
//     input = document.getElementById(".search-container");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }


//Keyup function - this function makes the letter entered into a search field got to all caps.

document.getElementById("search").addEventListener('keyup', myFunction);

function myFunction() {
  var x = document.getElementById("search");
  x.value = x.value.toUpperCase();
}