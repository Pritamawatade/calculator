let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventlistner('click',()=>{
        console.log(e.target);
    })

});
