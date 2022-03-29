/*!
* Start Bootstrap - Simple Sidebar - This is our base for the bootstrap template. v6.0.4 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

const _gJSON = async url => {
    const   _res  =   await fetch(url);
    if  (!_res.ok)  {   throw new Error(_res.statusText);   }
    const   _d    =   _res.json();    return _d;
}

function _dHTML(html) {
    var raw_txt = document.createElement("textarea");   raw_txt.innerHTML = html;   return raw_txt.value;
}

//var _loc = window.location.hash.substring(1);
//console.log(_loc);


$(document).ready(function () {
    console.log('Loading')
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });

  });





window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const   sidebarToggle   =   document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
             document.body.classList.toggle('sb-sidenav-toggled');
         }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const   content_alpha   =   document.getElementById('page-content-alpha');
    console.log('Getting content_alpha');
    if  (content_alpha) {
        // Content content_alpha
        //const _p = document.createElement("p");
        //const _data = document.createTextNode("Discord.ac");
        //_p.appendChild(_data);
        
        // Attempt 1
        // console.log("Fetching data...");
        //let url = "https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json";
        //let _data; try { _gJSON(url).then((data) => {   _data = data;  });    }   catch(error) {  console.log(error); }
        
        console.log("Fetching data...");

        _ad = '<div class="grid-item col-md-6 mb-6"> <div class="card"> <div class="card-body"> <h5 class="font-weight-bold mb-3">Panel title</h5> <p class="mb-0">Some quick example text to build on the panel title and make up the bulk of the panels content.</p> </div> <ul class="list-group list-group-flush"> <li class="list-group-item">Cras justo odio</li> <li class="list-group-item">Dapibus ac facilisis in</li> <li class="list-group-item">Vestibulum at eros</li> </ul> <div class="card-body"> <a href="#!" class="card-link mr-3">Card link</a> <a href="#!" class="card-link ml-0">Another link</a> </div> </div> </div>';
        content_alpha.insertAdjacentHTML("beforeend", _ad);
        
        _gJSON("https://raw.githubusercontent.com/KBVE/archive/main/static/modular/bootstrap/masonry/bin/mdbootstrap.json?sefe").then(data => {
            _data = data;
            _app = _data.app;
                
                _v = _data.v;
                _code = _data.code;
                _base64 = _data.base64;
                _html_encode = _data.html_encode;
                _aes = _data.aes;

                let _p = _code;
                if(_base64)
                {
                    _p = atob(_p);
                }
                if(_html_encode)
                {
                _p = _dHTML(_p);
                }
                console.log(_p);
                content_alpha.insertAdjacentHTML("beforeend", _p);
                
        }).catch(error => {
        console.error(error);
        });

       
        
    }


});
