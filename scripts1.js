let items = document.getElementById('items')
items.innerHTML = "";

let topDiv = document.getElementById('top');



// Add an event listener to the page reload event


function takeOrder() {
    // window.location.href = "http://localhost:5500/index1.html";
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
       let len = data.length;
       items.innerHTML = "";
       for(let i = 0;i<6;i++){
          let rand = Math.floor(Math.random() * len);
          let item  = document.createElement('div');
          item.className = 'item';
          item.innerHTML = `
          <div class="image">
              <img src=${data[rand].imgSrc} alt="">
          </div>
          <div class="desc">
              <div class="lef">
                  <p>${data[rand].name}</p>
                  <p>$ ${data[rand].price} /-</p>
              </div>
              <div class="right">
                  <i class="fa-solid fa-plus"></i>
              </div>
             
          </div> 
          `
          items.appendChild(item);
       }
    })
}


function orderPrep() {
    return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve({order_statu:"true",paid:"false"});
          },1500)
    })
}

function payOrder() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({order_statu:"true",paid:"true"})  
        },1000)
           
     })
}
function TakeOrderFunction() {
    return new Promise((resolve,reject) => {
           setTimeout(() => {
             takeOrder();
             resolve("success");
           },2500)
    })
}

let takeOrderData = TakeOrderFunction();

takeOrderData.then(data => {
  console.log(data);
})
.then(data => {
    return orderPrep();
}).then(data => {
    console.log("data after 1.5s is " ,data);
}).then(data => {
    return payOrder();
}).then(data => {
    console.log("data after 1s " , data);
}).then(data => {
    alert("Thanks for eathing with us");
})