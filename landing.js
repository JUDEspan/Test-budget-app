var budgetArray =JSON.parse(localStorage.getItem("budget"));

if(budgetArray && budgetArray.length>0){
    var spent = 0;
    displayAll()
}
function deleteAny (i) {
    checkArray.splice(i, 1);
    localStorage.setItem("budget", JSON.stringify(budgetArray));
    totalSpent = 0; // Reset totalSpent
    result.innerHTML = ""; // Clear the card display
    displayAll(); // Redisplay the updated cards
}
function editAny(i){
    let yName = itemName.value;
    let price = amountBought.value;
    let quantity = quantity;
    checkArray[i]["yName"] = yName;
    checkArray[i]["quak"] = quantity;
    checkArray[i]["vale"] = price;
    localStorage.setItem("budget", JSON.stringify(budgetArray));
    totalSpent = 0; // Reset totalSpent
    result.innerHTML = ""; // Clear the card display
    displayAll()
}

    function displayAll(){
    for(i=0; i<budgetArray.length; i++ ){
        
    let item = budgetArray[i];
    let itemCost = item.quak * item.vale;
    // totalSpent += itemCost;
    result.innerHTML += `
    <div class="card" style="width: 18rem;" d-flex>
    <div class="card-body">
        <h5 class="card-text">Product: ${item.yName}</h5>
        <h5 class="card-text">Quantity: ${item.quak} </h5>
        <h5 class="card-text">Price: ${item.vale}  </h5>
        <h5 class="card-text">Total: ${itemCost} </h5>
        <a href="#" class="btn btn-danger" onclick="deleteAny(${i})">Delete</a>
        <a href="#" class="btn btn-warning"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input type="text" placeholder="Product name" id="tem">
            <input type="number"  placeholder="Quantity" id="quan">
            <input type="number" placeholder="Price" id="rate">
            </div>
            div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editAny(${i})" data-bs-dismiss="modal">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
        `
    }
}