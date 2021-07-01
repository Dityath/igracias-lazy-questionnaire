//copy code below to console
let r = document.querySelectorAll('input[type=radio]');
for (var i = 0; i < r.length; i += 1){
    if(i % 1 == 0){
        r[i].checked = true;}
}
document.forms["form1"].submit();
