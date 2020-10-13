
function getData(){
    $.getJSON("data.json", function (json){
        let data = json.data;
        console.log(data);
        
        let img_holder = document.getElementById("img_holder");
        for (let i = 0; i < data.length; i++) {

            let id = "kep" + i;
            img_holder.innerHTML +=
            '<div class="col-sm-12 col-md-6 col-lg-4">'+
                '<div class="image" id="'+id+'"></div>'+
            '</div>';

            let pic = document.getElementById(id);

            pic.style.backgroundImage = 'url("' +data[i].pic+ '")';
        }
    })
}

getData();