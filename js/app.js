/////--extra memory cost--/////
const memory = document.getElementById('memory'); 
const unified = document.getElementById('unified'); 
let memoryCost = document.getElementById('extra-memory-cost').innerText; 
let memoryCostNumber = parseFloat(memoryCost);
memory.addEventListener('click', function() {
    memoryCostNumber = 0; 
    updateTotal();
})
unified.addEventListener('click', function() {
    memoryCostNumber = 100; 
    updateTotal();
})

/////--extra storage cost--/////
const freeStorage = document.getElementById('free-storage');
const getStorage = document.getElementById('get-storage');
const extraStorage = document.getElementById('extra-storage');
let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
let extraStorageCostNumber = parseFloat(extraStorageCost); 

freeStorage.addEventListener('click', function(){
    extraStorageCostNumber = 0; 
    updateTotal()
});

getStorage.addEventListener('click', function(){
    extraStorageCostNumber = 100;
    updateTotal()
});

extraStorage.addEventListener('click', function(){
    extraStorageCostNumber = 180;
    updateTotal()
});

/////--delivery charge--/////
const freeDelivery = document.getElementById('free-delivery');
const deliveryCost = document.getElementById('delivery-cost');

let deliveryCharge = document.getElementById('delivery-charge').innerText;
let deliveryChargeNumber = parseFloat(deliveryCharge);

freeDelivery.addEventListener('click', function(){
    deliveryChargeNumber = 0;
    updateTotal()
});

deliveryCost.addEventListener('click', function(){
    deliveryChargeNumber = 20;
    updateTotal()
});

/////--update total--/////
function updateTotal() {
    document.getElementById('extra-memory-cost').innerText = memoryCostNumber;
    document.getElementById('extra-storage-cost').innerText = extraStorageCostNumber;
    document.getElementById('delivery-charge').innerText = deliveryChargeNumber; 
    let totalCost = 1299 + memoryCostNumber + extraStorageCostNumber + deliveryChargeNumber; 
    document.getElementById('total').innerText = totalCost;
}




