//copy code below to console
let r = document.querySelectorAll('input[type=radio]');
for (var i = 0; i < r.length; i += 2){
    if(i % 2 == 0){
        r[i].checked = true;}
}
document.forms["form1"].submit();
