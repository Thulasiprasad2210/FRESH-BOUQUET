let main=document.querySelector(".continer")
let a=document.createElement("div")
a.id="head"
a.innerHTML=`<h3>FRESH BOUQUET</h3>
<div class="menu">
<ul type="none">
<li><a href="#head">HOME</a></li>
<li><a href="#blog">BLOG</a></li>
<li><a href="#shop">SHOP</a></li>
<li><a href="#service">SERVICES</a></li>
<li><a href="#help">HELP</a></li>
</ul>
</div>
`
main.append(a)

let b= document.createElement("div")
b.innerHTML=`
<div class="head1">
<h2>WELCOME TO FRESH BOUQUET</h2>
<p class="h2">Feel The Fresh Blossom</p>
</div>
`
main.append(b)

let c= document.createElement("div")
c.id="blog"
c.innerHTML=`
<div class='blog1'>
<h1><i>Flowers are nature’s colorful blossoms that bring beauty, fragrance, and joy to the world.</i></h1>
</div>

<div class='figure1'>
<img src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym91cXVldHxlbnwwfHwwfHx8MA%3D%3D">
<img src="https://cdn.shopify.com/s/files/1/0013/9791/5715/files/bouquet_of_sunflowers_480x480.jpg?v=1725527002"title="Sunflower">
<img src="https://i.etsystatic.com/31976049/r/il/5e8830/6777047207/il_fullxfull.6777047207_f8pm.jpg" title="Wedding">
<img src="https://thumbs.dreamstime.com/b/wedding-bouquet-hydrangea-blue-green-colors-outdoors-41445149.jpg" title="hydrangea">
<img src="https://boxandblooms.co.nz/cdn/shop/files/B_B_Pastels_Vase_and_Wrapped.jpg?v=1742344297" title="Posy">
<img src="https://floralgaragesg.com/wp-content/uploads/2021/04/True-Happiness-L25.jpg" title="lilies, primarily pink lilies">
<img src="https://www.solawoodflowers.com/cdn/shop/files/lilac-and-lavender-finished-bouquet-550574-912059_grande.jpg?v=1730789554" title="lilac-and-lavender">
<img src="https://giftnmore.in/wp-content/uploads/2022/04/16369.jpg" title="Roses">
<img src="https://i.etsystatic.com/22154491/r/il/10192d/3401723903/il_570xN.3401723903_abgr.jpg" title="Hoop">
<img src="https://i.etsystatic.com/5836801/r/il/2eef86/3745043854/il_fullxfull.3745043854_qnk4.jpg" title="Asymmetrical">
</div>
`
main.append(c)

let shop=document.createElement("div")
shop.id="shop"
shop.innerHTML=`
<h3 class="h3">Shop</h3>
<div class="shops">
<div class="shop1">
<img src="https://images.squarespace-cdn.com/content/v1/61dc2acb6586d071bd3bc4ea/0841da15-8f3e-4f52-9587-957437ef5008/IMG_9239.jpg">
<p><u><b>bridal bouquet</b></u></p>
<p>white roses, hydrangeas, and eucalyptus leaves, along with other <br> white flowers, possibly freesias or ranunculus. </p>
<p><b>Price :</b>₹500</p>
<button>Buy Now</button>
</div>

<div class="shop2">
<img src="https://cdn.pixabay.com/photo/2023/04/24/16/51/bouquet-7948558_1280.jpg">
<p><u><b>Basket Bouquet</b></u></p>
<p>colorful blooms, including daisies, chrysanthemums, and other wildflowers in shades of white, orange, pink, and purple. </p>
<p><b>Price :</b>₹800</p>
<button>Buy Now</button>
</div>

<div class="shop3">
<img src="https://cdn.bloomsflora.com/uploads/product/flowers_n_fruits/1687350674_9.png">
<p><u><b>Red carnations</b></u></p>
<p>They are a popular choice for gifts on special occasions due to their vibrant color and romantic symbolism. </p>
<p><b>Price :</b>₹700</p>
<button>Buy Now</button>
</div>

<div class="shop4">
<img src="https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D">
<p><u><b>bouquet of flowers.</b></u></p>
<p>Loyalty and sincerity, Chrysanthemums convey sincere feelings, without being excessive. </p>
<p><b>Price :</b>₹900</p>
<button>Buy Now</button>
</div>

<div class="shop5">
<img src="https://thefloraldecorator.com.au/cdn/shop/files/IMG_1976.jpg?v=1719450879&width=750">
<p><u><b>Red carnations</b></u></p>
<p>They are a popular choice for gifts on special occasions due to their vibrant color and romantic symbolism. </p>
<p><b>Price :</b>₹700</p>
<button>Buy Now</button>
</div>

<div class="shop6">
<img src="https://nativeapothecary.in/cdn/shop/files/IMG_6095.jpg?v=1729791097&width=4000">
<p><u><b>featuring Matthiola incana</b></u></p>
<p>Matthiola incana is a species of flowering plant in the cabbage family Brassicaceae.</p>
<p><b>Price :</b>₹700</p>
<button>Buy Now</button>
</div>

<div class="shop7">
<img src="https://i.etsystatic.com/24139279/r/il/d247ef/5247281368/il_570xN.5247281368_hxzv.jpg">
<p><u><b>hoop bouque</b></u></p>
<p>floral hoop wreath, which is a type of decorative floral arrangement typically used for weddings or home decor.</p>
<p><b>Price :</b>₹650</p>
<button>Buy Now</button>
</div>

<div class="shop8">
<img src="https://www.fnp.com/images/pr/l/v20201222201404/oh-so-white-flower-bunch_3.jpg">
<p><u><b>white flower bunch</b></u></p>
<p>a bouquet of white flowers, including lilies, anthuriums, and gypsophila (baby's breath), wrapped in a grey paper.</p>
<p><b>Price :</b>₹950</p>
<button>Buy Now</button>
</div>
</div>
`
main.append(shop)


let service=document.createElement("div")
service.id="service"
service.innerHTML=`
<h3>SERVICES</h3>
<div class="service1">
<img src="https://img.freepik.com/free-psd/spring-flyer-template-with-photo_23-2148863118.jpg?semt=ais_incoming&w=740&q=80">
<p> exclusive offers</p>

<img src="https://img.freepik.com/free-vector/twenty-four-service_1017-30335.jpg">
<p>24/7 Customer care Services</p>

<img src="https://5.imimg.com/data5/GA/VW/DH/SELLER-27502487/regional-deliveries-500x500.jpg">
<p>Free Home Delivery</p>
</div>
`
main.append(service)

let contact = document.createElement("div")
contact.id = "help"
contact.innerHTML = `
 <h5>Contact☎️Us:</h5>
    <div>
    <p><b>Web :</b>freshbouquet/in.com</p>
    <p><b>Email :</b>freshbouquet2025@gmail.com</p>
    <p><b>Phone :</b>+91 999999999</p>
    <p class="social">Face Book|Instagram|Whatsapp</p>
    </div>
`
main.append(contact)

let footer = document.createElement("footer")
footer.innerHTML = `
<center>
<p>&copy; Reserved by Fresh Bouqute 2025</p>
</center>
`
main.append(footer)