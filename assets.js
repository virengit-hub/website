
// Search functionality for navigation
function search() {
    var input = document.getElementById("searchBar");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("navList");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        if (a) {
            var txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}

// Responsive navigation menu (basic example)
document.addEventListener("DOMContentLoaded", function () {
    // Example: Toggle mobile nav (if you add a button for it)
    var navToggle = document.getElementById("navToggle");
    var navList = document.getElementById("navList");
    if (navToggle && navList) {
        navToggle.addEventListener("click", function () {
            navList.classList.toggle("open");
        });
    }
});
