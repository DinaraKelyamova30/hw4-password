let a = prompt('Write password "likeJS"');
let count = 0;
while (a != 'likeJS' && count < 4) {
    if (a != 'likeJS' && count == 0){
    alert('Неправильний проль. Залишилось 4 спроби!');
    count++;
    a = prompt('Write password "likeJS"');
    }
    if (a != 'likeJS' && count == 1) {
        alert('Неправильний проль. Залишилось 3 спроби!');
        count++;
        a = prompt('Write password "likeJS"');
    } 
    if (a != 'likeJS' && count == 2) {
        alert('Неправильний проль. Залишилось 2 спроби!');
        count++;
        a = prompt('Write password "likeJS"');
    }
    if (a != 'likeJS' && count == 3) {
        alert('Неправильний проль. Залишилось 1 спроби!');
        count++;
        a = prompt('Write password "likeJS"');
    }
    if (a != 'likeJS' && count == 4) {
        alert('Будь ласка спробуйте пізніше');
    }
}
if (a = 'likeJS' ){
    alert('Вітємо на сайті');
}