
document.getElementById("submit").addEventListener("click", function (){
    const preTotal= document.getElementById("pre-total").value
    const tip= document.getElementById("tip").value
    const subTotal= parseInt(tip)/100 * parseInt(preTotal)
    const total= subTotal+ parseInt(preTotal)
    document.getElementById("total").value=total.toFixed(2)


})

