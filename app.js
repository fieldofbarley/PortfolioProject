const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions(){
    for(let i = 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            // console.log(currentBtn);
            // console.log(currentBtn[0]);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            // console.log(this);
        })
    }

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            // // remove the selected from the other btns
            // sectBtns.forEach((btn)=> {
            //     btn.classList.remove('active')
            //     // console.log(btn);
            // })
            // e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

// Toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=>{
    let element = document.body;
    console.log(element);
    element.classList.toggle('light-mode');

})

pageTransitions();

