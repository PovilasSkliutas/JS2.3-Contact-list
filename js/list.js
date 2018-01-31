$(function() {
    //sukuriame forma duomenims ivesti
    $("#new").click(function(){
        $(".content").empty();
        console.log('New list form is ON');
        $(".content").append(
            '<p><label for="userName">User name</label><br><input type="text" id="userName" placeholder="username"></p>',
            '<p><label for="eMail">E-mail</label><br><input type="text" id="eMail" placeholder="mail"></p>',
            '<p><label for="age">Age</label><br><input type="text" id="age" placeholder="age"></p>',
            '<p></p>',
            '<button id="submit" type="button" class="btn btn-primary btn-sm">Submit</button>',
            '<button id="cancel" type="button" class="btn btn-danger btn-sm">Cancel</button>',
        );
    });
    //funkcija gauti duomenis is serverio
    $("#getList").click(function(){
        $(".content").empty();
        console.log("get list mygtukas veikia");
        $.ajax({
            url:"http://192.168.1.81:8080/list",
            contentType:"application/json",
            dataType:"json",
            type:"get",
            success:function(data){
                console.log(data);

                //sukuriame lentele duomenims atvaizduoti
                $('.content').html('<table class="table table-sm table-bordered"><thead class="thead-inverse"><tr><th class="w-5">#</th><th class="w-40">User Name</th><th class="w-40">E-mail</th><th class="w-5">Age</th><th class="w-5">Edite</th><th class="w-5">Delete</th></tr></thead></table>');

                //surenkame ir priskiriame gautus duomenis i lentele
                $.each(data, function(index, item){
                    $('.content table').append('<tr><th>'+item.id+'</th><th>'+item.userName+'</th><th>'+item.eMail+'</th><th>'+item.age+'</th><th>'+'<button id="edite" type="button" class="btn btn-warning btn-sm">edite</button>'+'</th><th>'+'<button id="delete" type="button" class="btn btn-danger btn-sm">delete</button>'+'</th></tr>');
                });
            }
        });
    });
    //funkcija naujiems duomenims ivesti ir issaugoti
    $(document).on('click',"#submit",function (){
        console.log("save mygtukas veikia");
    let parseAge = parseInt($('input#age').val(), 10);
        newData = {};
            newData.id = 1;
            newData.userName = $('input#userName').val();
            newData.eMail = $('input#eMail').val();
            newData.age = parseAge;
        str = JSON.stringify(newData);
        console.log(str);

        $.ajax({
            url:"http://192.168.1.81:8080/add",
            data: str,
            contentType:"application/json",
            dataType:"json",
            type:"post",
            success:function(){
                console.log("issiusta");
            }
        });
    });
    //funkcija cancel duomenis
    $(document).on('click',"#cancel",function (){
        console.log("cancel mygtukas veikia");

    });
});
