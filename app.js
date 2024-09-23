let everyclick = 0

const clickerShow = document.getElementById('clickerShow')
const btn = document.getElementById('btn')
const azalt = document.getElementById('dicrease')

btn.addEventListener("click",()=>{
    everyclick++;
    clickerShow.innerHTML = `${everyclick}`
    
    console.log(everyclick)
})

azalt.addEventListener("click",()=> {
    everyclick--;
    clickerShow.innerHTML = `${everyclick}`
})
