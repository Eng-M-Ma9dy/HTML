
function changeScope(btnNun){

    let section = document.getElementById(`button${btnNun}`);

    hiddenDisplay(section,btnNun)
}



function hiddenDisplay(s,n){
    
    let btn = document.getElementById(`btn-${n}`)

    if(s.classList.contains('d-none') == true){

        s.classList.remove('d-none')

        btn.classList.replace('text-danger','text-primary')
    }else{
        s.classList.add('d-none')

        btn.classList.replace('text-primary','text-danger')
    }
}


function openHome(){
    window.open("https://eng-m-ma9dy.github.io/FrontEnd/","_self")
}
