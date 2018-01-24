/*mygtuko su 3 divais funkcija aprasyta su javascript
function myFunction() {
    let element = document.getElementsByTagName('div');
    let i;
    for (i = 0; i < element.length; i++) {
         element[i].classList.toggle("myStyle");
    }
}
*/
/*mygtuko su 3 divais funkcija aprasyta su jQuery
$(function() {
    $("#btn").click(function(){
        $("div").toggleClass("myStyle");
    });
});
*/
$(function() {
    $("#list").click(function(){
        $.ajax({
            url:"http://192.168.1.81:8080/list",
            contentType:"application/json",
            type:"get",
            dataType:"json",
            succsess:function(data){
                console.log(data);
            }
        });
    });
    $("#new").click(function(){
        $(".form1").append(
            "<p>Username</p>",
            '<input type="text" id="username" placeholder="username">',
            "<p>Email</>",
            '<input type="text" id="mail" placeholder="mail">',
            "<p>Age</>",
            '<input type="text" id="age" placeholder="age">',
            "<p></p>",
            '<input type="button" id="save" value="save">',
            '<input type="button" id="cnacel" value="cancel">',
        )
    });
    $("#save").click(function(){
        $(".form1").submit(function(){
            $.ajax({
                url:"http://192.168.1.81:8080/add",
                contentType:"application/json",
                type:"post",
                dataType:"json",
                succsess:function(data){
                    console.log(data);
                }
            });
        })
    })

});
