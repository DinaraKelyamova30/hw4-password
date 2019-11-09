let a = prompt('Write password "likeJS"');
let count = 4;
while(a!='likeJS' && count>0){
    alert(`Залишилось ${count} спроб`);
    a = prompt('Write password "likeJS"');
    if (a == 'likeJS'){
        count = 0;
    }
    count --;
}
if(a == 'likeJS'){
    alert('welcome');
} else {
    alert('try again later');
}
