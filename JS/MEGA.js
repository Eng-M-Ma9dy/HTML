function changeScope(btnNun){

    let section = document.getElementById(`button${btnNun}`);

    hiddenDisplay(section,btnNun)
}

function hiddenDisplay(s,n){
    
    let btn = document.getElementById(`btn-${n}`)

    if(s.classList.contains('d-none') == true){

        s.classList.remove('d-none')

        btn.classList.replace('text-danger','text-info')
    }else{
        s.classList.add('d-none')

        btn.classList.replace('text-info','text-danger')
    }
}

function openHome(){
    window.open("https://www.linkedin.com/in/eng-m-ma9dy/","_blank")
}



