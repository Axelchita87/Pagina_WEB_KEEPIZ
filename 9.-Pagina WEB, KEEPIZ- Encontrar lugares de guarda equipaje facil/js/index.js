function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdown4").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtnacerca')) {
        var myDropdown = document.getElementById("myDropdown1");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtnbuscar')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtnperfil')) {
        var myDropdown = document.getElementById("myDropdown3");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtnidioma')) {
        var myDropdown = document.getElementById("myDropdown4");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }

}


function initMap() {
    var uluru = { lat: 19.4094621, lng: -99.1806998 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
