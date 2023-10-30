const list = document.querySelector('.carrousel')
const buttonMenu = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
        <div style= "display:inline-block;border: 2px solid #B6000F;border-radius: 20px; width: 250px; height: 280px; margin-top: -220px; margin-left: 20px; background: #B6000F; cursor: pointer;}">
        <img src="${product.src}" style="margin-top:-130px; margin-left: 30px; cursor: pointer;">
        <h2 style="color: #FFF;font-size: 20px;text-align:center;margin-top:20px;">${product.name}</h2>
        <p style="color:#FDB137; text-align: center; margin-top: 20px; width: 150px; margin-left:50px;margin-top: 20px; font-size: 18px;">Lorem ipsum dolor sit amet.</p>
        <h3 style="font-size: 20px; color: #FFF; margin-left:100px; margin-top:20px;">R$ ${product.price}</h3>
    </div>
    `
})
    list.innerHTML = myLi 

}

buttonMenu.addEventListener('click' , showAll)
