var budgetArray =[]
function check(){
    var yName = itemName.value;
    var price = amountBought.value;
    var quantity = quantity;
    var budgetObj = {yName, price, quantity};
    var budgetArray = JSON.parse(localStorage.getItem("budget")) || [];


    if(budgetObj.iName=="" || budgetObj.price=="" || budgetObj.quantity==""){
        errDisplay.innerHTML = `<h4 class="bg-danger w-25">Please input all</h4>`
    }else{
        budgetArray.push(budgetObj)
        localStorage.setItem("budget", JSON.stringify(budgetArray))
        window.location.href = "landing.html"
    }

    



}