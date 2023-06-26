const colors = document.querySelectorAll("div.colors span")
colors.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        document.querySelector(':root').style.setProperty('--color', window.getComputedStyle(event.target).getPropertyValue('background-color'))
    })
})  