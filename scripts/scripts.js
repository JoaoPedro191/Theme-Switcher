let themetoggler= document.querySelector('.theme-toggler')


themetoggler.onclick = () =>{
  themetoggler.classList.toggle('active');

if(themetoggler.classList.contains('active')){
  document.body.classList.add('active')
  
}else{
  document.body.classList.remove('active');
}

}


document.querySelectorAll('.theme-colors .color').forEach(color =>{
    color.onclick = () => {
    let background = color.style.background;
    document.querySelector(':root').style.setProperty('--main-color', background);

  }

});

let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () =>{
  theme.classList.add('active');
  document.body.style.paddingRight = '350px';
  
}

document.querySelector('#theme-close').onclick = () =>{
  theme.classList.remove('active');
  document.body.style.paddingRight = '0px';
}
