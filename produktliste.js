fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}
/*
    <article class="smallProduct">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
    alt="Sahara Team India Fanwear Round Neck Jersey">
    <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
    <p class="subtle">T-Shirts | Nike</p>
    <p class="price"><span>Før</span> DKK 1595,-</p>
    <div class="discounted">
    <p>Nu DKK 1560,-</p>
    <p>-34%</p>
    </div>
    <a href="produkt.html">Læs mere</a>
    </article>
*/
/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/

/*
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  } else if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  } else {
    copy.querySelector("article").classList.add("soldOut", "onSale");
  }
*/
