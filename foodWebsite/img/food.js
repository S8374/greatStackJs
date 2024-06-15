let loading = document.querySelector('.loading');
let container = document.querySelector('.container');
let card = document.querySelectorAll('.card');

card.forEach(function(card){
    card.addEventListener('click', function(){
        console.log(card)
        document.querySelector("body").innerHTML="";
        let div = document.createElement("div");
        div.classList.add("foodDetail");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt=""> 
          <div class="detailText">
              <h1>Foods You Like</h1>
              <h2>Upto 40% OFF</h2>
              <p>Pay on delivery might be available</p>
              <p>Pay on delivery might be available</p>
              <p>Pay on delivery might be available</p>
              <p>Pay on delivery might be available</p>
              <button>Buy Now</button>
              <button>Add To Cart</button>
              <a href="">Back</a>
          </div>
        `
        document.querySelector("body").appendChild(div)
    })
})





//loading section 
container.style.display = 'none';
setTimeout(function(){
   container.style.display = 'block' ;
   loading.style.display = 'none';
},2000)