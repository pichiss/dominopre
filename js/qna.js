let qus = document.querySelectorAll('.qus');
let asw = document.querySelectorAll('.asw');

qus.forEach(function(qu){
  qu.addEventListener('click',function(){

      var panel = this.nextElementSibling;
      let qusA = document.querySelector('.qus.active')  
      if(qu.getAttribute('class')==='qus active'){
          panel.style.maxHeight = null;
          qusA.classList.remove('active')
      }else{  
      for(item of asw){
          if(item.style.maxHeight){
              item.style.maxHeight = null;
              qusA.classList.remove('active')
          }
      } 
      qu.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight+'px';
      } 
  })
});

let taps = document.querySelectorAll('.searchTap li');
let contents = document.querySelectorAll('.searchContent');
let contentShow = document.querySelector('.searchContent.show');
let firstTap = document.querySelector('.firstQu')

taps.forEach(function(tap,i){
  tap.addEventListener('click',()=>{
    for(let i=0; i<taps.length; i++){
    taps[i].classList.remove('action');
    }
    tap.classList.add('action');
    console.log(tap.getAttribute('class'))
    if(tap.getAttribute('class')==='action'){
          for(let j=0; j<taps.length; j++){
          contents[j].classList.remove('show');

          }
          contents[i].classList.add('show');
        }
        })
      })
      
