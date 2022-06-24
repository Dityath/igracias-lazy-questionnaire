//copy code below to console
let r = document.querySelectorAll('input[type=radio]');
let numberOfRadionButton = 5
for (var i = 0; i < r.length; i += numberOfRadionButton){
    if(i % 2 == 0){
        r[i].checked = true;
    }else{
        r[i+1].checked = true; // erase the + 1 if you want to make all "sangat puas"
    }
}
document.forms["form1"].submit();