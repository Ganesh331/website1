


 function Add(){
    var a1 = document.getElementsByTagName('input')[0].value

    var a2 = document.getElementsByTagName('input')[1].value
    
    var p_tag = document.getElementsByTagName('p')[0]

    a1 = parseInt(a1)
    a2= parseInt(a2)
    var c = a1 +a2

    p_tag.innerHTML = "result : " + c
 }

 function sub(){
    var a1 = document.getElementsByTagName('input')[0].value

    var a2 = document.getElementsByTagName('input')[1].value
    
    var p_tag = document.getElementsByTagName('p')[0]
    a1 = parseInt(a1)
    a2= parseInt(a2)

    var c = a1 -a2

    p_tag.innerHTML = "result : " + c

 }

 function Multi(){
    var a1 = document.getElementsByTagName('input')[0].value

    var a2 = document.getElementsByTagName('input')[1].value
    
    var p_tag = document.getElementsByTagName('p')[0]
    a1 = parseInt(a1)
    a2= parseInt(a2)

    var c = a1 * a2

    p_tag.innerHTML = "result : " + c

 }
 function divs(){
    var a1 = document.getElementsByTagName('input')[0].value

    var a2 = document.getElementsByTagName('input')[1].value
    
    var p_tag = document.getElementsByTagName('p')[0]
    a1 = parseInt(a1)
    a2= parseInt(a2)

    var c = a1 / a2

    p_tag.innerHTML = "result : " + c

 }