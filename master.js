$(function(){

    $(".menu").hover(
        function(){ //mouseover
            $(this).attr("src", "/img/Hamburger_hover.png")
        },
        function(){ //mouseout
            $(this).attr("src", "/img/Hamburger.png")
        }
    );

    $(".img_delete").click(function(){
        delete_Memo();
    });

    $(".img_delete").hover(
        function(){ //mouseover
            $(this).attr("src", "/img/Clear_hover.png")
        },
        function(){ //mouseout
            $(this).attr("src", "/img/Clear.png")
        }
    );

    //function that adds Memo
    $(".add_memo").click(function(){
        add_Memo();
    });

});

function delete_Memo(){
    alert("Click Delete_memo button. If you click this, delete this comment.");
}

//function that adds Memo
function add_Memo(){
    alert("Click Add_memo button. If you click this, add new comment.");
}