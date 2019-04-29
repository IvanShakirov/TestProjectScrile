/*
function move() {
    var bar = document.getElementById("bar");
    var money =document.getElementById("money");
    var info_text =document.getElementById("info_text")
    var width = 1;
    var dollars=0;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 93)/!*93.3 это 14 долларов*!/ {
            clearInterval(id);
        } else {
            width++;
            dollars=((width*1)*(15/100)).toFixed(0);
            bar.style.width = (width-2) + '%';
            money.style.width= (width +2)+ '%';
            money.innerHTML='<p>&#9650 </p>' + '$' + dollars;
            info_text.innerText= 'You need ' + dollars +' $ more to reach your target'
        }
    }
}*/
function move() {
    var width = 1;
    var dW=1;
    var dollars, dollars_not_round;
    var position;
    var id;
    $.ajax({
        url: 'http://alex.devel.softservice.org/testapi/',
        data: {text: 'a'},
        success: function (data) {
            console.log(data.balance_usd);
            position=data.balance_usd;
            id  = setInterval(frame,10);
        }})
    function frame() {
        if (dollars_not_round >=position )
        {   if(position==15)
                {
                    $('#indicator').css('background-color', '#00A910');
                    $('#info').css('display', 'none')
                }
            clearInterval(id);
            id = setInterval(frame, 2000);
            position=15;
            dW=0.2/(15/100);/*1.3  - при таком шаге получаем расстояние по 0.2 доллара*/

        }else
        {
             width+=dW;
            dollars= ((width*1)*(15/100)).toFixed(0);
            dollars_not_round= ((width*1)*(15/100)).toFixed(2);
            $('#bar').css("width",(width-2)+ '%');
            $('#money').css("width",(width-2)+ '%');
            $('#money').html('<p>&#9650 </p>' + '$' + dollars);
            $('#info_text').html('You need ' + (15 - dollars_not_round+ 0.1).toFixed(1) +'$ more to reach your target');
        }

    }

}