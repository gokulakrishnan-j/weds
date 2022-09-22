var names=document.getElementById('names')
names.addEventListener('click',()=>{
    names.style.backgroundColor="rgba(151, 45, 45, 0.959)"
    names.innerHTML=`<span style="color:white">VASU DEVAN & POOJA</span>`
    document.getElementById('edit_role').style.display="none"
})