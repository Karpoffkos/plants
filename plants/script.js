/* // разбор методов поиска 
// querySelector - ПОИСК ПЕРВОГО ПО СЧЕТУ СОВПАДЕНИЯ. 
//
let el = document.querySelector('.log');
alert(el.textContent + el.tagName);

//  document.querySelectorAll - возвращает коллекцию 
let elem = document.querySelectorAll('.log');
for (let logs of elem){
    alert(logs.tagName + ' #10'); // Div #10
    alert (logs.textContent + ' #11# ' + logs.textContent.length); // Plants #11# 28
    alert(logs.innerHTML + ' #12# ' + logs.innerHTML. length); // Plants #12# 28

    if (logs.textContent !== 'Plants') {
        alert(logs.tagName); // Div
        
        logs.innerHTML = 'Plants';
    }           
};
alert(el.textContent + '#20#' + el.innerHTML.length); // Plants #20#6
 */


// Birger menu ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Создание открытия / закрытия бургер меню (появление крестика и его исчезание ), при котором справа
 появляется панель навигации, при этом экран становится без скрола до следующего нажатия  */

let burger = document.querySelector('.burger');

let nav = document.querySelector('.nav');
let body = document.querySelector('.body');
let header = document.querySelector('.header');
let about = document.querySelector('.about');

let main_bkgd = document.querySelector('.shadow');



burger.addEventListener('click', openCloseBurerForm);
burger.addEventListener('click', (event) => event.stopPropagation()); // остановка всплытия 
  

function openCloseBurerForm () {
    burger.classList.toggle('activeBurger1');
    nav.classList.toggle('nav380')
    body.classList.toggle('body_scroll');
    body.addEventListener('click', closeBurerFormAtBody, { once: true });  // { once: true }- после выполнения обработчика - удалит его
}
function closeBurerFormAtBody () {   
    burger.classList.toggle('activeBurger1');
    nav.classList.toggle('nav380')
    body.classList.toggle('body_scroll');
  
    }

// Service btm ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Добавление эффекта blur для карточек в разделе service в зависимости от выбранной секции */
let gardens_btm = document.querySelector('.gardens_btm');
let planting_btm = document.querySelector('.planting_btm');
let lawn_btm = document.querySelector('.lawn_btm');
let gardens = document.querySelectorAll('.gardens');
let planting = document.querySelectorAll('.planting');
let lawn = document.querySelectorAll('.lawn');

gardens_btm.addEventListener('click', toggleBlurGardens);
lawn_btm.addEventListener('click', toggleBlurLawn);
planting_btm.addEventListener('click', toggleBlurPlanting);


function toggleBlurGardens() {
    if(!(lawn_btm.classList.contains('button_checked_service')&&planting_btm.classList.contains('button_checked_service')) ){ // условие для недопущения выбора более двух параметров, в случае более двух - не выполняется
        if(lawn_btm.classList.contains('button_checked_service')||planting_btm.classList.contains('button_checked_service')){
            for (let tag of gardens){
                tag.classList.toggle('blur')
            } 
        } else {
            for (let tag of planting){
                tag.classList.toggle('blur')
            }
            for (let tag of lawn){
                tag.classList.toggle('blur')
            }
        }
   
        gardens_btm.classList.toggle('button_checked_service')
       
    }
}
 function toggleBlurLawn() {
    if(!(gardens_btm.classList.contains('button_checked_service')&&planting_btm.classList.contains('button_checked_service')) ){
        if(gardens_btm.classList.contains('button_checked_service')||planting_btm.classList.contains('button_checked_service')){
            for (let tag of lawn){
                tag.classList.toggle('blur')
            } 
        } else   
            { for (let tag of gardens){
                    tag.classList.toggle('blur')
                }
                for (let tag of planting){
                    tag.classList.toggle('blur')
                }
            }
        
        lawn_btm.classList.toggle('button_checked_service')
     
    }
}
 
function toggleBlurPlanting() {
    if(!(gardens_btm.classList.contains('button_checked_service')&&lawn_btm.classList.contains('button_checked_service')) ){
        if(gardens_btm.classList.contains('button_checked_service')||lawn_btm.classList.contains('button_checked_service')){
            for (let tag of planting){
                tag.classList.toggle('blur')
            }
        } else {
            for (let tag of gardens){
                tag.classList.toggle('blur')
            }
            for (let tag of lawn){
                tag.classList.toggle('blur')
            }
        }  
        planting_btm.classList.toggle('button_checked_service')
    }
}
 
// Price section ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* добавление функционала выпадающей каорточки при ее выборе   */

let price_card_active= document.querySelectorAll('.price_card_active');

let basics = document.querySelector('.basics');
let standard = document.querySelector('.standard');
let pro = document.querySelector('.pro');

let price_card_arrow_basics = document.querySelector('.price_card_arrow_basics');
let price_card_arrow_standard = document.querySelector('.price_card_arrow_standard');
let price_card_arrow_pro = document.querySelector('.price_card_arrow_pro');

let price_card_checked_basics = document.querySelector('.price_card_checked_basics');
let price_card_checked_standard = document.querySelector('.price_card_checked_standard');
let price_card_checked_pro = document.querySelector('.price_card_checked_pro');

price_card_arrow_basics.addEventListener('click', price_card_basics_activation);
price_card_arrow_standard.addEventListener('click', price_card_standard_activation);
price_card_arrow_pro.addEventListener('click', price_card_pro_activation);

function price_card_basics_activation(){
    
    if(standard.classList.contains('price_card_active') ){
        price_card_standard_activation()        
    } 
    if(pro.classList.contains('price_card_active') ){
        price_card_pro_activation()        
    } 
    basics.classList.toggle('price_card_active');
    basics.classList.toggle('price_card_position_basics');
    price_card_arrow_basics.classList.toggle('price_card_arrow_active');
    price_card_checked_basics.classList.toggle('hidden');
    price_card_active = document.querySelectorAll('.price_card_active');
}
function price_card_standard_activation(){

    if(basics.classList.contains('price_card_active') ){
        price_card_basics_activation()        
    } 
    if(pro.classList.contains('price_card_active') ){
        price_card_pro_activation()        
    } 
    standard.classList.toggle('price_card_active');
    standard.classList.toggle('price_card_position_standard');
    price_card_arrow_standard.classList.toggle('price_card_arrow_active');
    price_card_checked_standard.classList.toggle('hidden');
    price_card_active = document.querySelectorAll('.price_card_active');
    
}
function price_card_pro_activation(){
   
    if(basics.classList.contains('price_card_active')  ){
        price_card_basics_activation()
    }
    if(standard.classList.contains('price_card_active') ){
        price_card_standard_activation()        
    } 


    pro.classList.toggle('price_card_active');
    pro.classList.toggle('price_card_position_pro');
    price_card_arrow_pro.classList.toggle('price_card_arrow_active');
    price_card_checked_pro.classList.toggle('hidden');
    price_card_active = document.querySelectorAll('.price_card_active');
}
