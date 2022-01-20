
// navbar export function

function navbar(){
    return `<!-- header -> present above dropdown menu option -->

    <div class="header">
        <div id="sellList">
            <ul>
                <li>Sell With Us</li>
                <li>Call Us</li>
                <li>Download App</li>
                <li></li>
            </ul>
        </div>

        <!-- website logo -->

        <div id="logo">
            <a href="index.html">
                <img src="https://images.shopclues.com/images/ui/shopclues_logo@2x.png" alt="logo">
            </a>
        </div>

        <!-- search box -->

        <div id="searchBar">
            <span>
                <input type="text" placeholder="What is on your mind today?" id="getinput">
                <button class="srch_btn">Search</button>
            </span>
        </div>

        <!-- login - cart - wishlist - location options -->

        <div id="sellListbtm">
            <ul>
                <li>
                    <span id="pin">421005</span><i class="fal fa-map-marker-alt"></i>
                </li>
                <li>
                    <i class="far fa-bell"></i>
                </li>
                <li>
                    <i class="far fa-heart"></i>
                </li>
                <li>
                    <a href="cartPage.html"><i class="fal fa-shopping-cart" id="showcart"><span id="qty">1</span></i></a>
                    <div class="hover_content1">
                        <div id="quickCart">
                            <div class="nItems">
                                
                            </div>
                            <div class="listItem">
                                
                            </div>
                            <div class="btnContainer">
                                <a href="">View Cart</a>
                                <a href="">Place Order</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="signin">
                    <a id="login_sucess">Sign In</a>
                    <div class="hover_content">
                        <div id="userHeading">
                            <i class="fal fa-user-circle"></i><span id="login_sucess1">Login/Register</span>
                            <p>Join VIP club</p>
                        </div>
                        <ul>
                            <li>
                                <i class="fal fa-clipboard-list"></i>
                                My Orders
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Returns
                            </li>
                            <li>
                                <i class="far fa-heart"></i>
                                Wishlist
                            </li>
                            <li>
                                <i class="fas fa-user-circle"></i>
                                My Profile
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Chat
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My CluesBucks
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-edit"></i>
                                My Feedback
                            </li>
                            <li>
                                <i class="fal fa-user-headset"></i>
                                Help & Support
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My Favorite Stores
                            </li>
                            <li id="signout" onclick="signOut()">
                                <i class="fal fa-sign-out"></i>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- end of header -->

    <!-- main navigation bar(dropdown options) -->

    <div class="main_navigation">
        <div id="wrapper">
            <ul>
                <!-- made in india logo -->

                <li id="madeIN">
                    <a href="">
                        <img src="https://images.shopclues.com/images/ui/madeinindia.png" alt="madeInIndia">
                    </a>
                </li>

                <!-- Mobiles & More dropdown options -->

                <li id="nav1">
                    <a href="ProductListPage.html">Mobiles & More</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong><a href="ProductListPage.html">Smartphones & Tablets</a></strong></li>
                                    <li><a href="ProductListPage.html">I KALL</a></li>
                                    <li><a href="ProductListPage.html">Mi</a></li>
                                    <li><a href="ProductListPage.html">Realme</a></li>
                                    <li><a href="ProductListPage.html">Samsung</a></li>
                                    <li><a href="ProductListPage.html">Vivo</a></li>
                                    <li><a href="ProductListPage.html">Oppo</a></li>
                                    <li><a href="ProductListPage.html">Apple</a></li>
                                    <li><a href="ProductListPage.html">Techno</a></li>
                                    <li><a href="ProductListPage.html">Infinix</a></li>
                                    <li><a href="ProductListPage.html">Micromax</a></li>
                                    <br>
                                    <li><strong>Refurbished Smartphones</strong></li>
                                    <br><br>
                                    <li><strong>Refurbished Feature Phones</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Feature Phones</strong></li>
                                    <li>Micromax</li>
                                    <li>I KALL</li>
                                    <li>Nokia</li>
                                    <li>MTR</li>
                                    <li>Heemax</li>
                                    <li>Karbonn</li>
                                    <li>Kechaoda</li>
                                    <li>Gfive</li>
                                    <li>Blackbear</li>
                                    <li>Samsung</li>
                                    <br>
                                    <li><strong>Gaming Consoles</strong></li>
                                    <li>Gaming Titles</li>
                                    <li>Gaming Accessories</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Bestsellers in Accessories</strong></li>
                                    <li>Top Rated Accessories</li>
                                    <li>Combos</li>
                                    <li>Power Banks</li>
                                    <li>Cases & Covers</li>
                                    <li>Mobile Holders</li>
                                    <li>Cables</li>
                                    <li>Adapter & Chargers</li>
                                    <li>Selfie Sticks</li>
                                    <br>
                                    <li><strong>Storage Devices</strong></li>
                                    <li>Memory Cards</li>
                                    <li>Pen Drives</li>
                                    <li>External Hard disks</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Branded Accessories</strong></li>
                                    <li>Tiitan</li>
                                    <li>Toshiba</li>
                                    <li>Sandisk</li>
                                    <li>Philips</li>
                                    <li>Portronics</li>
                                    <li>Zebronics</li>
                                    <li>Boat</li>
                                    <li>Syska</li>
                                    <li>JBL</li>
                                    <br>
                                    <li><strong>Audio Store</strong></li>
                                    <li>Headphones & Earphones</li>
                                    <li>Bluetooth Earphones</li>
                                    <li>Bluetooth Speakers</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Laptops</strong></li>
                                    <li>HP</li>
                                    <li>Lenovo</li>
                                    <li>Asus</li>
                                    <li>Acer</li>
                                    <li>Coconics</li>
                                    <br>
                                    <li><strong>Refurbished Laptops</strong></li>
                                    <br>
                                    <li><strong>Laptop Accessories</strong></li>
                                    <li>Mouse</li>
                                    <li>Keyboards</li>
                                    <li>Laptop Bags</li>
                                    <li>Laptop Skins</li>
                                    <br>
                                    <li><strong>Printers</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of Mobiles & More dropdown options -->

                <!-- MEN dropdown options -->

                <li id="nav2">
                    <a href="">MEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Men's Clothing</strong></li>
                                    <li>T-shirt</li>
                                    <li>Shirt</li>
                                    <li>Jeans</li>
                                    <li>Cargos</li>
                                    <li>Trousers</li>
                                    <li>Track Pants</li>
                                    <li>Shorts & 3/4th</li>
                                    <li>Jackets</li>
                                    <li>Ethnic Wear</li>
                                    <li>Winter wear</li>
                                    <li>Inner & Sleepwear</li>
                                    <li>29K Store</li>
                                    <br>
                                    <li><strong>Sportswear</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Footwear</strong></li>
                                    <li>Casual Shoes</li>
                                    <li>Sports Shoes</li>
                                    <li>Formal Shoes</li>
                                    <li>Sandals & Floaters</li>
                                    <li>Slippers & Flip Flops</li>
                                    <li>Loafers And Moccasins</li>
                                    <li>Boots</li>
                                    <li>Ethnic</li>
                                    <li>Speciality Footwear</li>
                                    <li>Shoe Care Kit & Accessories</li>
                                    <li>Top Selling Brands</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Men's Watches</strong></li>
                                    <li>Watch Combos</li>
                                    <li>Couple Watches</li>
                                    <li>Fastrack, Sonata & More</li>
                                    <li>Budget Watches</li>
                                    <li>Smart Watches</li>
                                    <br>
                                    <li><strong>Men's Jewellery</strong></li>
                                    <li>Fashion Jewellery</li>
                                    <li>Chains & Pendants</li>
                                    <li>Precious Jewellery</li>
                                    <li>Silver Jewellery</li>
                                    <li>Coins & Collectibles</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Fragrances</strong></li>
                                    <li>Fragrance Combos and Kits</li>
                                    <li>Deodorants</li>
                                    <br>
                                    <li><strong>Grooming</strong></li>
                                    <li>Beard & Moustache Care</li>
                                    <li>Men's Shaving</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                    <li>Skin Care</li>
                                    <li>Hair Care</li>
                                    <br>
                                    <li><strong>Eyewear</strong></li>
                                    <li>Sunglasses</li>
                                    <li>Spectacle Frames</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Fashion Accessories</strong></li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Socks</li>
                                    <li>Caps</li>
                                    <li>Winter Accessories</li>
                                    <li>Men's Accessories Gift Sets</li>
                                    <br>
                                    <li><strong>Bags & luggage</strong></li>
                                    <li>Backpacks & Laptop Bags</li>
                                    <li>Gym Bags</li>
                                    <li>Trolleys & Duffle Bags</li>
                                    <li>Travel Accessories</li>
                                    <li>Messenger Bags</li>
                                    <li>Rucksacks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of MEN dropdown options -->

                <!-- WOMEN dropdown options -->

                <li id="nav3">
                    <a href="">WOMEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Ethnic Wear</strong></li>
                                    <li>Sarees</li>
                                    <li>Kurtas & Kurtis</li>
                                    <li>Lehengas & Party Gowns</li>
                                    <li>Dress Material</li>
                                    <li>Leggings & Churidar</li>
                                    <li>Meia Store</li>
                                    <br>
                                    <li><strong>Western Wear</strong></li>
                                    <li>Tops & Tees</li>
                                    <li>Dresses</li>
                                    <li>Jeans & Jeggings</li>
                                    <li>Pants & Trousers</li>
                                    <li>Skirts</li>
                                    <li>Code Yellow Store</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Lingerie</strong></li>
                                    <li>Bra</li>
                                    <li>Panties</li>
                                    <li>Sleepwear</li>
                                    <li>Shapewear</li>
                                    <li>Lingerie Sets</li>
                                    <br>
                                    <li><strong>Footwear</strong></li>
                                    <li>Casual Shoes</li>
                                    <li>Flats & Sandals</li>
                                    <li>Women's Heels & Pumps</li>
                                    <li>Women Sports Shoes</li>
                                    <li>Wedges</li>
                                    <li>Women's Bellies</li>
                                    <li>Flip Flops & Slippers</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>All Jewellery</strong></li>
                                    <li>Fashion Jewellery</li>
                                    <li>Pendant & Necklace Sets</li>
                                    <li>Mangalsutra & Bangles</li>
                                    <li>Earrings & Rings</li>
                                    <li>Gold & Diamond Jewellery</li>
                                    <li>Silver Jewellery</li>
                                    <li>Coins & Collectibles</li>
                                    <br>
                                    <li><strong>Women's Watches</strong></li>
                                    <li>Casual Wear Watches</li>
                                    <li>Office Wear Watches</li>
                                    <li>Branded Watches</li>
                                    <li>Budget Watches</li>
                                    <br>
                                    <li><strong>Couple Watches</strong></li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Beauty & Perfumes</strong></li>
                                    <li>Skin Care</li>
                                    <li>Make-Up</li>
                                    <li>Hair Care</li>
                                    <li>Personal Care & Grooming</li>
                                    <li>Beauty Accessories</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                    <li>Women Hygiene</li>
                                    <br>
                                    <li><strong>Fragrances</strong></li>
                                    <li>Perfumes</li>
                                    <li>Deodorants</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Fashion Accessories</strong></li>
                                    <li>Socks & Stockings</li>
                                    <li>Hair Accessories</li>
                                    <li>Scarves & Stoles</li>
                                    <li>Belts</li>
                                    <li>Handkerchiefs</li>
                                    <li>Shawls</li>
                                    <br>
                                    <li><strong>Bags & luggage</strong></li>
                                    <li>Backpacks & Laptop Bags</li>
                                    <li>Gym Bags</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of WOMEN dropdown options -->
                
                <!-- HOME & KITCHEN dropdown options -->

                <li id="nav4">
                    <a href="">HOME & KITCHEN</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Kitchen & Dining</strong></li>
                                    <li>Dinner sets</li>
                                    <li>Cookware</li>
                                    <li>Container Sets</li>
                                    <li>Kitchen tools</li>
                                    <li>Lunch box</li>
                                    <li>Kitchen storage</li>
                                    <br>
                                    <li><strong>Kitchen Appliances</strong></li>
                                    <li>Gas Cooktops</li>
                                    <li>Juicer Mixer Grinders</li>
                                    <li>Induction Cooktops</li>
                                    <li>Kettles</li>
                                    <li>Sandwich Makers</li>
                                    <li>Blenders and choppers</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Home Furnishing</strong></li>
                                    <li>Home Berry</li>
                                    <li>Bedsheets</li>
                                    <li>Curtains</li>
                                    <li>Carpets & Rugs</li>
                                    <li>Blankets</li>
                                    <li>Towels</li>
                                    <li>Furnishing Combos</li>
                                    <br>
                                    <li><strong>Bathroom & Sanitaryware</strong></li>
                                    <li>Sanitaryware</li>
                                    <li>Bathroom Fixtures</li>
                                    <li>Bathing Utilities</li>
                                    <li>Bathroom Mirror and Cabinets</li>
                                    <li>Faucets and Jet sprays</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Lighting Solutions</strong></li>
                                    <li>Led bulbs</li>
                                    <li>Tubelights & Battens</li>
                                    <li>Rechargeable Lights</li>
                                    <li>Electrical</li>
                                    <li>Panel & Ceiling Lights</li>
                                    <br>
                                    <li><strong>Tools & Hardware</strong></li>
                                    <li>Hand Tools</li>
                                    <li>Power Tools</li>
                                    <li>Safety Equipments</li>
                                    <br>
                                    <li><strong>Home Improvement</strong></li>
                                    <li>Cleaning Supplies</li>
                                    <li>Laundry Organisation</li>
                                    <li>Organisers</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Decor</strong></li>
                                    <li>Clocks</li>
                                    <li>Hookahs & Accessories</li>
                                    <li>Wall Decor</li>
                                    <li>Religion & Spirituality</li>
                                    <li>Table Decoratives</li>
                                    <li>Garden</li>
                                    <br>
                                    <li><strong>Furniture</strong></li>
                                    <li>Inflatable Sofas</li>
                                    <li>Storage Furniture</li>
                                    <li>Bean Bags</li>
                                    <li>Wall Shelves</li>
                                    <li>Sofa Sets</li>
                                    <li>Beds</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Home Appliance</strong></li>
                                    <li>Water Purifiers</li>
                                    <li>Irons</li>
                                    <li>Emergency Lights</li>
                                    <li>Sewing Machines</li>
                                    <li>Vacuum Cleaners</li>
                                    <li>Appliances Parts & Components</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of HOME & KITCHEN dropdown options -->

                <!-- APPLIANCES dropdown options -->

                <li id="nav5">
                    <a href="">APPLIANCES</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>TV & DTH</strong></li>
                                    <li>Television</li>
                                    <li>Full HD</li>
                                    <li>HD Ready</li>
                                    <li>Ultra HD</li>
                                    <br>
                                    <li><strong>Shop TV By Screen</strong></li>
                                    <li>Below 32 Inch</li>
                                    <li>32 Inch</li>
                                    <li>39 Inch - 42 Inch</li>
                                    <li>43 Inch & Above</li>
                                    <br>
                                    <li><strong>DTH</strong></li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Large Home Appliances</strong></li>
                                    <li>Air Conditioners</li>
                                    <li>Split ACs</li>
                                    <li>Window Acs</li>
                                    <br>
                                    <li><strong>Stabilizers</strong></li>
                                    <br>
                                    <li><strong>Air Coolers</strong></li>
                                    <br>
                                    <li><strong>Air Purifiers And De-Humidifiers</strong></li>
                                    <br>
                                    <li><strong>Refrigerators</strong></li>
                                    <li>Single Door</li>
                                    <li>Double Door</li>
                                    <li>Side by Side</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Washing Machine</strong></li>
                                    <li>Semi Automatic</li>
                                    <li>Fully Automatic Top Load</li>
                                    <li>Fully Automatic Front Load</li>
                                    <br>
                                    <li><strong>Geysers</strong></li>
                                    <br>
                                    <li><strong>Heaters</strong></li>
                                    <br>
                                    <li><strong>Inverters</strong></li>
                                    <br>
                                    <li><strong>Large Kitchen Appliances</strong></li>
                                    <li>Chimney & Hoods</li>
                                    <li>Microwave and Halogen Ovens</li>
                                    <li>OTG</li>
                                    <li>Dishwashers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of APPLIANCES dropdown options -->

                <!-- SPORTS & MORE dropdown options -->

                <li id="nav6">
                    <a href="">SPORTS & MORE</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Diet Nutrition</strong></li>
                                    <li>Whey Protein</li>
                                    <li>Weight Gainers</li>
                                    <li>Pre & Post Workout</li>
                                    <li>Fat Burners</li>
                                    <li>Vitamins & Minerals</li>
                                    <li>Ayurveda & Herbal</li>
                                    <br>
                                    <li><strong>Healthcare</strong></li>
                                    <li>Flu Care</li>
                                    <li>Massage & Relaxation</li>
                                    <li>Weighing Scales</li>
                                    <li>BP Monitors</li>
                                    <li>Supports & Elderly Care</li>
                                    <li>General Wellness</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Fitness & Exercise</strong></li>
                                    <li>Ab Exercisers</li>
                                    <li>Home Gyms</li>
                                    <li>Exercise Bikes</li>
                                    <li>Fitness Accessories</li>
                                    <li>Treadmills</li>
                                    <li>Cardio Equipments</li>
                                    <br>
                                    <li><strong>Sports</strong></li>
                                    <li>Cricket Bats</li>
                                    <li>Footballs</li>
                                    <li>Badminton Racquets</li>
                                    <li>Table Tennis</li>
                                    <li>Basketball</li>
                                    <li>Swimming & Water Sports</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Car Accessories & Electronics</strong></li>
                                    <li>Perfumes & Fresheners</li>
                                    <li>Dashboard Accessories</li>
                                    <li>Sun Shades</li>
                                    <li>Car Body Covers</li>
                                    <li>Door & Bumper Guards</li>
                                    <li>Car Electronics</li>
                                    <br>
                                    <li><strong>Bike Accessories & more</strong></li>
                                    <li>Bike Body Covers</li>
                                    <li>Riding Gear</li>
                                    <li>Helmets</li>
                                    <li>Bike Locks & Alarm Systems</li>
                                    <li>Car & Bike Care</li>
                                    <li>Tools & Oils</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Beauty & Perfumes</strong></li>
                                    <li>Skin Care</li>
                                    <li>Make-Up</li>
                                    <li>Hair Care</li>
                                    <li>Personal Care & Grooming Products</li>
                                    <li>Beauty Accessories</li>
                                    <br>
                                    <li><strong>Grooming</strong></li>
                                    <li>Fragrance Combos and Kits</li>
                                    <li>Beard & Moustache Care</li>
                                    <li>Men's Shaving</li>
                                    <li>Grooming Appliances</li>
                                    <li>Bath Essentials</li>
                                    <li>Oral Care</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Daily Needs & Essentials</strong></li>
                                    <li>Food & Beverages</li>
                                    <li>Household Supplies</li>
                                    <li>Pet Suplies</li>
                                    <li>Regional Sweets and snacks</li>
                                    <li>Stationery</li>
                                    <li>Books</li>
                                    <br>
                                    <li><strong>Gift Cards</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of SPORTS & MORE dropdown options -->

                <!-- ESSENTIALS dropdown options -->

                <li id="nav7">
                    <a href="">ESSENTIALS</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>Food and Beverage</strong></li>
                                    <li>Oils & Vinegars</li>
                                    <li>Pastas & Noodles</li>
                                    <li>Coffee & Tea</li>
                                    <li>Cakes Biscuits & Chips</li>
                                    <li>Dry Fruits Nuts & Seeds</li>
                                    <li>Jams Honey & Spreads</li>
                                    <li>Mouth Freshners & Digestives</li>
                                    <li>Ready to cook</li>
                                    <li>Sauces Dips & Pickles</li>
                                    <br>
                                    <li><strong>Grocery & Staples</strong></li>
                                    <li>Rice & Flours</li>
                                    <li>Pulses</li>
                                    <li>Sugar & Jaggery</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Household Supplies</strong></li>
                                    <li>Laundry and Detergents</li>
                                    <li>Disposables</li>
                                    <li>Pooja Essentials</li>
                                    <li>Repellents & Devices</li>
                                    <br>
                                    <li><strong>Ayurveda & Herbal</strong></li>
                                    <br>
                                    <li><strong>Flu Care</strong></li>
                                    <br>
                                    <li><strong>Medical Equipment & Accessories</strong></li>
                                    <br>
                                    <li><strong>Nutrition & Supplements</strong></li>
                                    <li>Ayurveda & Herbal</li>
                                    <li>Family Nutrition</li>
                                    <li>Vitamins and Minerals</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>Personal Care and Grooming</strong></li>
                                    <li>Men's Grooming</li>
                                    <li>Feminine Hygiene</li>
                                    <li>Oral Care</li>
                                    <li>Hair Care</li>
                                    <li>Fragrances</li>
                                    <br>
                                    <li><strong>Baby Care</strong></li>
                                    <li>Baby Food</li>
                                    <li>Bath & Skin Care</li>
                                    <li>Diapers & Wipes</li>
                                    <li><strong>Pet Supplies</strong></li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Top Brands</strong></li>
                                    <br>
                                    <li><strong>Himalaya</strong></li>
                                    <br>
                                    <li><strong>Cadbury</strong></li>
                                    <br>
                                    <li><strong>Veet</strong></li>
                                    <br>
                                    <li><strong>Pharma</strong></li>
                                    <li>Ayurveda</li>
                                    <li>Pain Relief</li>
                                    <li>Sexual Wellness</li>
                                    <li>Homeopathy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of ESSENTIALS dropdown options -->

                <!-- OFFERS dropdown options -->

                <li id="nav8">
                    <a href="">OFFERS</a>
                    <div class="menu_wrap">
                        <div class="ul_menu_block">
                            <div id="column_1" class="s_col">
                                <ul>
                                    <li><strong>All Offers</strong></li>
                                    <br>
                                    <li><strong>Kotra Top Sellers</strong></li>
                                    <br>
                                    <li><strong>Season Essentials</strong></li>
                                    <li>Womens Tops & Skirts</li>
                                    <li>FlipFlops</li>
                                    <li>Mens Shorts</li>
                                    <br>
                                    <li><strong>Kitchen Essentials</strong></li>
                                    <br>
                                    <li><strong>Popular Categories</strong></li>
                                    <li>Women Ethnic</li>
                                    <li>Mens Tshirt</li>
                                    <li>Watches</li>
                                    <li>Mens Footwear</li>
                                    <li>Women Western</li>
                                    <li>Home Furnishing</li>
                                </ul>
                            </div>
                            <div id="column_2" class="s_col">
                                <ul>
                                    <li><strong>Wholesale</strong></li>
                                    <li>Mobile and Laptop Accessories</li>
                                    <li>Fashion</li>
                                    <li>Home & Kitchen</li>
                                    <li>Footwear</li>
                                    <br>
                                    <li><strong>Featured Brands</strong></li>
                                    <li>Stylogue</li>
                                    <li>Ikall</li>
                                    <li>eglob</li>
                                    <li>Walltola</li>
                                    <li>Seagate HD</li>
                                    <li>DCH</li>
                                </ul>
                            </div>
                            <div id="column_3" class="s_col">
                                <ul>
                                    <li><strong>New Arrivals</strong></li>
                                    <li>Lifestyle</li>
                                    <li>Home & Living</li>
                                    <li>Electronic</li>
                                    <li>Daily Utility</li>
                                    <br>
                                    <li><strong>Explore Our Stores</strong></li>
                                    <li>Saree Fest</li>
                                    <li>Watch Carnival</li>
                                    <li>Lighting Shoppe</li>
                                    <li>Jeans Fest</li>
                                    <li>Mobile Accessories</li>
                                    <li>Bed Sheets</li>
                                </ul>
                            </div>
                            <div id="column_4" class="s_col">
                                <ul>
                                    <li><strong>Shop By Price</strong></li>
                                    <li>Under 99</li>
                                    <li>Under 199</li>
                                    <li>Under 249</li>
                                    <li>Under 349</li>
                                    <br>
                                    <li><strong>Shop By Discount</strong></li>
                                    <li>Upto 25% Off</li>
                                    <li>Upto 50% Off</li>
                                    <li>Upto 60% Off</li>
                                    <li>Upto 80% Off</li>
                                </ul>
                            </div>
                            <div id="column_5" class="s_col">
                                <ul>
                                    <li><strong>Buy More Save More</strong></li>
                                    <li>Ethnic Wear Combo</li>
                                    <li>Men Combo</li>
                                    <li>Watch Combo</li>
                                    <li>Footwear Combo</li>
                                    <br>
                                    <li><strong>Best Offers</strong></li>
                                    <li>Korean Avenue</li>
                                    <li>Refer & Earn</li>
                                    <li>Wholesale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <!-- End of OFFERS dropdown options -->
                
                <!-- GLOBAL SHOPPING options -->

                <li id="nav9">
                    <a href="">GLOBAL SHOPPING</a>
                </li>
            </ul>
        </div>
    </div>


    <!-- popup Window signin and regiser page -->

    <div id="back">
        <div class="popup_signin">
            <div class="points">
                <ul>
                    <li>
                        <i class="fas fa-hand-holding-usd"></i>
                        <h6>Loyalty Points</h6>
                        <p>Earn CluesBucks on prepaid orders</p>
                    </li>
                    <li>
                        <i class="fas fa-cart-arrow-down"></i>
                        <h6>Instant Checkout</h6>
                        <p>Hassle-Free Payment Everytime</p>
                    </li>
                    <li>
                        <i class="fas fa-badge-percent"></i>
                        <h6>Exclusive Offers</h6>
                        <p>For special offers & value deals</p>
                    </li>
                </ul>
            </div>
            <div id="page_signin">
                <div id="select_op">
                    <h2 id="showin">LOGIN</h2>
                    <h2 id="showster">REGISTER</h2>
                    <button id="closetab"><i class="fal fa-times"></i></button>
                </div>
                <div class="signinShow">
                    <form>
                        <input type="text" placeholder="Enter your username" id="username2">
                        <br><br>
                        <input type="password" placeholder="Enter your password" id="password2">
                        <br><br>
                        <input type="submit" value="Login" id="checkdetail">
                        <input type="submit" value="login test" id="login_test">
                    </form>
                    <h3>Social Login</h3>
                    <button>Continue with Facebook</button>
                </div>
                <div class="signup">
                    <form>
                        <input type="email" placeholder="Enter your email id" id="email">
                        <br><br>
                        <input type="number" placeholder="Enter your mobile number" id="number">
                        <br><br>
                        <input type="text" placeholder="Enter your username" id="username1">
                        <br><br>
                        <input type="password" placeholder="Enter your password" id="password1">
                        <br><br>
                        <input type="submit" value="Register" id="storedetail">
                        <input type="submit" value="Test user" id="Test_user">
                    </form>
                    <h3>Register With</h3>
                    <button>Continue with Facebook</button>
                </div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <footer>
        <div class="footer1">
            <div class="sc_callouts">
                <h4>Shopper Central</h4>
                <ul>
                    <li>Easy Returns & Replacement</li>
                    <li>Sign In/Register</li>  
                    <li>Our Policies</li>
                    <li>CluesBucks</li>
                    <li>Payment Options</li>
                    <li>ShopClues Surety</li>
                    <li>FAQs (Help)</li>
                    <li>Service Centers</li>                        
                    <li>User Agreement</li> 
                    <li>Refer & Earn</li>
                </ul>
            </div>
            <div class="sc_callouts">
                <h4>Merchant Central</h4>
                <ul>
                    <li>Merchant Panel</li>
                    <li>How To Sell</li>
                    <li>Commission Structure</li>
                    <li>Fullfillment Policy</li>
                    <li>Policies & Rules</li>
                    <li>User Agreement</li>
                    <li>Testimonials</li>
                    <li>Seller Summit</li>
                    <li>Merchant Blog</li>
                    <li>Developer Resources</li>
                </ul>
            </div>
            <div class="sc_callouts">
                <h4>About Us</h4>
                <ul>
                    <li>History</li>
                    <li>Band of Trust</li>
                    <li>Brand Guidelines</li>
                    <li>TV Commercials</li>
                    <li>In the News</li>
                    <li>Awards</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="sc_callouts">
                <h4>Contact Us</h4>
                <ul>
                    <li>Merchant Support</li>
                    <li>Bulk Orders</li>
                    <li>Press</li>
                </ul>
            </div>
            <div class="sc_callouts">
                <h4>Press</h4>
                <ul>
                    <li>In the News</li>
                </ul>
            </div>
        </div>

        <!-- Keep In Touch -->

        <div class="footer2">
            <div class="listlogo">
                <div class="social_connection">
                    <h3>Keep In Touch</h3>
                    <ul>
                        <li>
                            <i class="fab fa-facebook-f"></i>
                        </li>
                        <li>
                            <i class="fab fa-pinterest-p"></i>
                        </li>
                        <li>
                            <i class="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fab fa-google-plus-g"></i>
                        </li>
                        <li>
                            <i class="fab fa-youtube"></i>
                        </li>
                        <li>
                            <i class="fab fa-linkedin-in"></i>
                        </li>
                    </ul>
                </div>
                <div class="trustedpayment">
                    <h3>100% Secure and Trusted Payment</h3>
                    <img src="//images.shopclues.com/images/ui/pgateway_dkt@2x.png" alt=""/>
                </div>
            </div>
        </div>
        <div class="footer3">
            <div class="scfooter_Category">
                <h3>Our Leading Categories</h3>
                <ul>
                    <li class="ftcat_heading">Mobile & Tablets:</li>
                    <li>Android Phones</li>
                    <li> | Smartphones</li>
                    <li> | Feature Phones</li>
                    <li> | Unboxed Phones</li>
                    <li> | Refurbished Phones</li>
                    <li> | Tablets</li>
                    <li> | CDMA Phones</li>
                    <li> | Value Added Services</li>
                    <li> | Sell Old/ Used Mobiles</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Computers:</li>
                    <li> Laptops</li>
                    <li> | Printers</li>
                    <li> | Routers</li>
                    <li> | Ink & Toner Cartridges</li>
                    <li> | Monitors</li>
                    <li> | Video Games</li>
                    <li> | Unboxed & Refurbished Laptops</li>
                    <li> | Assembled Desktops</li>
                    <li> | Data Cards</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">TV, Audio & Large Appliances:</li>
                    <li>TVs & DTH</li>
                    <li> | Home Theatre Systems</li>
                    <li> | Hidden Cameras & CCTVs</li>
                    <li> | Refrigerators</li>
                    <li> | Washing Machines</li>
                    <li> | Air Conditioners</li>
                    <li> | Cameras</li>
                    <li> | Speakers</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Mobile &amp; Laptop Accessories:</li>
                    <li> Headphones</li>
                    <li> | Power Banks</li>
                    <li> | Backpacks</li>
                    <li> | Mobile Cases & Covers</li>
                    <li> | Pen Drives</li>
                    <li> | External Hard Disks</li>
                    <li> | Mouse</li>
                    <li> | Smart Watches & Fitness Bands</li>
                    <li> | MicroSD Cards</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Appliances:</li>
                    <li> Trimmers</li>
                    <li> | Hair Dryers</li>
                    <li> | Emergency Lights</li>
                    <li> | Water Purifiers</li>
                    <li> | Electric Kettles</li>
                    <li> | Hair Straighteners</li>
                    <li> | Induction Cooktops</li>
                    <li> | Sewing Machines</li>
                    <li> | Geysers</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Home & Kitchen:</li>
                    <li> Bedsheets</li>
                    <li> | Hardware & Sanitaryware</li>
                    <li> | Towels, Bath Linens</li>
                    <li> | Furniture</li>
                    <li> | Cookware</li>
                    <li> | Kitchen Tools</li>
                    <li> | Home Cleaning Utilities</li>
                    <li> | Doormats</li>
                    <li> | Curtains</li> 
                    <li> | Gardening Essentials</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Fashion:</li>
                    <li> Women's Clothing</li>
                    <li> | Men's Clothing</li>
                    <li> | Women's Ethnic Wear</li>
                    <li> | Men's Fashion Accessories</li>
                    <li> | Sports Wear</li>
                    <li> | Western Wear</li>
                    <li> | Handbags &amp; Wallets, Clutches</li>
                    <li> | Handbags</li>
                    <li> | Sarees</li>
                    <li> | T-Shirts</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Footwear:</li>
                    <li> Men's Sports Shoes</li>
                    <li> | Men's Slippers</li>
                    <li> | Casual Shoes</li>
                    <li> | Sandals & Floaters</li>
                    <li> | Formal Shoes</li>
                    <li> | Women Flats</li>
                    <li> | Ballerinas</li>
                    <li> | Loafers</li>
                    <li> | Boots</li>
                    <li> | Shoe Care &amp; Accessories</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Travel & Luggage:</li>
                    <li> Duffle Bags</li>
                    <li> | Laptop Bags</li>
                    <li> | Travel Pouches</li>
                    <li> | Backpacks</li>
                    <li> | Suitcases &amp; Trolleys</li>
                    <li> | Travel Accessories</li>
                    <li> | Gym Bags</li>
                    <li> | Messenger Bags</li>
                    <li> | School Bags</li>
                    <li> | Safety Locks</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Jewelry & Watches:</li>
                    <li> Coins & Bars</li>
                    <li> | Men's Watches</li>
                    <li> | Women's Watches</li>
                    <li> | Necklaces Sets</li>
                    <li> | Fashion Jewelry</li>
                    <li> | Pendants and Lockets</li>
                    <li> | Earrings</li>
                    <li> | Rings</li>
                    <li> | Jewelry Boxes</li>
                    <li> | Kid's Watches</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Automotive:</li>
                    <li> Bike Accessories / Tools</li>
                    <li> | Car Cleaning Aids</li>
                    <li> | Helmets</li>
                    <li> | Bike Body Covers</li>
                    <li> | Car Accessories / Tools</li>
                    <li> | Riding Gloves</li>
                    <li> | Car Perfumes</li>
                    <li> | Car Scratch Removers</li>
                    <li> | Car Audio | Video</li>
                    <li> | Bike Alarms</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Toys, Baby &amp; Kids :</li>
                    <li> Diapers</li>
                    <li> | Educational Toys</li>
                    <li> | Kid's Footwear</li>
                    <li> | Remote Controlled Toys</li>
                    <li> | Soft Toys</li>
                    <li> | Party Supplies</li>
                    <li> | Cubes</li>
                    <li> | Maternity Care</li>
                    <li> | Kid's Apparel</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Gourmet & Daily Needs :</li>
                    <li> Office Supplies</li>
                    <li> | Pet Supplies</li>
                    <li> | Books</li>
                    <li> | Namkeen</li>
                    <li> | Stationery</li>
                    <li> | Pens & Markers</li>
                    <li> | Tea & Coffee</li>
                    <li> | Chocolates &amp; Candies</li>
                    <li> | Indian Sweets</li>
                    <li> | Gifts</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Sports and Health</li>
                    <li>Home Gym Equipment</li>
                    <li> | Exercise Bikes</li>
                    <li> | Gym Accessories</li>
                    <li> | Massagers</li>
                    <li> | Diabetic Care</li>
                    <li> | Cricket</li>
                    <li> | Table Tennis</li>
                </ul>
                <ul>
                    <li class="ftcat_heading">Beauty & Perfumes:</li>
                    <li> Grooming Essentials</li>
                    <li> | Deodorants</li>
                    <li> | Men's Perfumes</li>
                    <li> | Hair Care</li>
                    <li> | Women's Perfumes</li>
                    <li> | Face Packs</li>
                    <li> | Oral Care</li>
                    <li> | Herbal Care</li>
                    <li> | Value Combo</li>
                    <li> | Women's Hygiene</li>
                </ul>
                <h3>Popular on ShopClues</h3>
                <ul id="lineht">
                    <li> Offers & Coupons</li> 
                    <li> | Couple Watches</li> 
                    <li> | Gas Stoves</li> 
                    <li> | Air Coolers</li> 
                    <li> | Air Purifiers</li> 
                    <li> | Headphones / Mic / Headset</li> 
                    <li> | Pressure Cookers</li> 
                    <li> | Sandwich Makers</li> 
                    <li> | Air Friers / Deep Friers</li>
                    <li> | Irons</li> 
                    <li> | LED TV</li>
                    <li> | Men Jackets</li> 
                    <li> | Educational Toys</li> 
                    <li> | Stabilizers</li> 
                    <li> | Heaters</li> 
                    <li> | Car Audio Systems</li> 
                    <li> | Photo Frames</li> 
                    <li> | Men's Shoes</li> 
                    <li> | Decorative Lights</li> 
                    <li> | Rain Wear</li> 
                    <li> | Bedsheets</li> 
                    <li> | Top Brands</li>
                    <li> | Refer & Earn</li>
                </ul>
            </div>
        </div>
        <div class="footer4">
            <div class="scfooter_Category">
                <h1>Online Shopping in India @Shopclues.com</h1>
                <h2>India’s Asli Online Shopping Hub – ShopClues.com</h2> Back in 2011, when people were hopping from one Store to another for best bargains on an overall household’s monthly bill, ShopClues was being developed as a budget-friendly online bazaar in India. ShopClues.com was then given a shape and strategy in 2012 as India’s First &amp; Largest Fully Managed Marketplace.
                <h2>Ting se Leke Tong – with Aflatooni Products!</h2> ‘What you Think is What you Get’ isn’t just a saying at ShopClues. With over 2.8 crore products, you can get just about everything that you can imagine at ShopClues. From usual products in Electronics, Fashion, Home &amp; Kitchen, to unusual products like cow dung cakes, Knife Sharpeners, etc., ShopClues tops in everything. So, you see what we mean when we say Aflatooni Products! ShopClues has revolutionized the conceptual Online Shopping in India with initiatives such as Ghar Wapsi Sale, Bigger than the Biggest Thank You Sale, #EkZeroKum Sale etc. Amongst many other shopping sites, ShopClues is the leader in unstructured categories like Daily Utilities, Garden Needs, Hardware, Kitchen Storage, and others.
                <h2>Believable Shopping @ Unbelievable Prices</h2> Every day, ShopClues delights millions of discount-hunters with Paisa-Vasool Shopping Experience with prices as low as Re.1. We are the first ones to introduce the idea of ‘Sab Kuch Wholesale Ke Rate Par’ on an online platform with shopping options to both wholesale as well as retail seekers.
                <h2>Experiencing the neighbourhood Local Bazaar</h2> ShopClues brings the experience of India’s Flea Markets online, in the form of its weekly properties - Sunday Flea Market, Refreshing Monday Sale, Triple Value Friday Sale, and Wednesday Brand Bazaar. Another property capturing the essence of regional Indian shopping is called NRH (National Regional Heritage), which gives a sneak-peek into India’s Cultural Gullies at very reasonable prices. These online markets showcase products with range so wide, and prices so low, that they beat the offline neighbourhood markets of India. The concept especially works incredibly well with the middle class population habituated in tier 2 &amp; 3 cities.
                <h2>An Online Selling Space for SME Merchants</h2> Working as a marketplace, ShopClues has been well-supported by a bourgeoning community of certified merchants in India. Unlike various other online shopping sites, ShopClues has achieved the largest merchant base of over 3.5 Lakhs. This online shopping website is creating history by empowering local and regional merchants, primarily from Tier 2 &amp; 3 cities and making them a national enterprise at ShopClues.
                <h2>Shopclues Surety</h2> The Shopclues Surety Program, was launched in order to ensure a hassle free shopping experience for its customers. This premium service is in addition to the ShopClues Buyer Protection program which ensures an extensive 5 point quality check of the products in order to give Customers a seamless shopping experience. In order to make it user-friendly, the platform marks out the rating of the products classified into ‘Best Buy’, ‘Great Buy’, ‘Value Buy’ or ‘Brand Authorized’. This allows the customer to make an optimal purchase decision while shopping on the platform.
                <h2>ShopClues VIP Club</h2>Get Rewards Every time you Shop! Join the VIP Club and Get 5% Cashback on Every Order. That's not all! With Free Membership, No Hidden Costs & No Registration Procedures, get Exclusive Benefits on Grofers, Lenskart, Food Panda & Hi Care Pest Control Services. Join the Club Now            
            </div>
        </div>
        <div class="footer5">
            <div class="scfooter_Category">
                <ul>
                    <li>Privacy Policy</li>
                    <li> | User Agreement</li>
                    <li> | Notes to Security Practices</li>
                    <li> | Compliance</li>
                    <li> | Wall of Fame</li>
                </ul>
                <div class="sc_copyright">
                    <p>Copyright © 2011-2022 Clues Network Pvt. Ltd.</p>
                    <img src="//images.shopclues.com/images/ui/shopclues_logo@2x.png" alt="Shopclues.com">
                </div>
            </div>
        </div>
    </footer>

    <!-- scroll top button -->

    <a href="" class="uparrow"></i></a>`
}

// dorpdown options mouseover function

function mouseoverNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "block";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "white";
    document.querySelector(`#${ele}>a`).style.color = "#24a3b5";
}
document.getElementById("nav1").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav1"));
document.getElementById("nav2").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav2"));
document.getElementById("nav3").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav3"));
document.getElementById("nav4").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav4"));
document.getElementById("nav5").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav5"));
document.getElementById("nav6").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav6"));
document.getElementById("nav7").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav7"));
document.getElementById("nav8").addEventListener("mouseover",mouseoverNavigation.bind(null,"nav8"));


// dorpdown options mouseout function

function mouseoutNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "none";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "#24a3b5";
    document.querySelector(`#${ele}>a`).style.color = "white";
}
document.getElementById("nav1").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav1"));
document.getElementById("nav2").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav2"));
document.getElementById("nav3").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav3"));
document.getElementById("nav4").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav4"));
document.getElementById("nav5").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav5"));
document.getElementById("nav6").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav6"));
document.getElementById("nav7").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav7"));
document.getElementById("nav8").addEventListener("mouseout",mouseoutNavigation.bind(null,"nav8"));

// function to openSigninPage

let openSigninPage = ()=> {
    document.getElementById("back").style.display = "block";
}
document.getElementById("login_sucess").addEventListener("click",openSigninPage);
document.getElementById("userHeading").addEventListener("click",openSigninPage);

// function for signOut

let signOut = () => {
        document.getElementById("login_sucess").textContent = "Sign In";
        document.getElementById("login_sucess").style.fontSize = "16px";
        document.getElementById("login_sucess1").textContent = "Login/Register";
        document.getElementById("signout").style.display = "none";
}

// function to showcart

let showcart = () => {
    document.querySelector(".hover_content1").style.display = "inline-block";
}
document.getElementById("showcart").addEventListener("mouseenter",showcart);

// function to hidecart

let hidecart = () => {
    document.querySelector(".hover_content1").style.display = "none";
}
document.getElementById("showcart").addEventListener("mouseleave",hidecart);


// function for search bar

let showResult = () => {

    let input = document.getElementById("getinput").value;

    if(input == "mobiles"){
        window.location.href = "productListPage.html";
    }
}
document.querySelector(".srch_btn").addEventListener("click",showResult);

// function for scroll top button

let lastscroll = 0;

let arrow = document.querySelector(".uparrow");

window.addEventListener("scroll", ()=> {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastscroll){
        arrow.style.display = "block";
    }
    else{
        arrow.style.display = "none";
    }
})


// functions for sign-in and regiser page

let div1 = document.querySelector(".signinShow");
let div2 = document.querySelector(".signup");
let h2_1 = document.querySelector("#select_op>h2:nth-child(1)");
let h2_2 = document.querySelector("#select_op>h2:nth-child(2)");

let showLogin = () => {
    div2.style.display = "none";
    h2_2.style.color = "black";
    h2_2.style.borderBottom = "none";

    div1.style.display = "block";
    h2_1.style.color = "#55b8c6";
    h2_1.style.borderBottom = "2px solid #55b8c6";

}
document.getElementById("showin").addEventListener("click",showLogin);

let showRegister = () => {
    div1.style.display = "none";
    h2_1.style.color = "black";
    h2_1.style.borderBottom = "none";

    div2.style.display = "block";
    h2_2.style.color = "#55b8c6";
    h2_2.style.borderBottom = "2px solid #55b8c6";

}
document.getElementById("showster").addEventListener("click",showRegister);



// function for storing userdetail on masai server(register page)

let storedetail = document.getElementById("storedetail");

storedetail.addEventListener("click", postData);

let userdetail;

async function postData(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;

    if(email == "" || number == "" || username == "" || password == ""){
        alert("Please fill all info");
    }
    else{
        userdetail = {
            email,
            number,
            username,
            password
        }

        userdetail = JSON.stringify(userdetail);

        let url = "https://masai-api-mocker.herokuapp.com/auth/register";

        try{
            let responce = await fetch(url, {
                method: "POST",
                body: userdetail,
                headers: {
                    "Content-Type" : "application/json"
                }
            })

            let res = await responce.json();
            if(res.error === true){
                alert(res.message);
            }
            else{
                alert(res.message);

                div2.style.display = "none";
                h2_2.style.color = "black";
                h2_2.style.borderBottom = "none";

                div1.style.display = "block";
                h2_1.style.color = "#55b8c6";
                h2_1.style.borderBottom = "2px solid #55b8c6";
            }
        }
        catch(err){
            if(err){
                document.getElementById("Test_user").style.display = "inline-block";
            }
        }
    }
    
}

// function for test user Registration

let testuserRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", userdetail);

    alert("Registration successfull");

    div2.style.display = "none";
    h2_2.style.color = "black";
    h2_2.style.borderBottom = "none";

    div1.style.display = "block";
    h2_1.style.color = "#55b8c6";
    h2_1.style.borderBottom = "2px solid #55b8c6";

}

let test = document.getElementById("Test_user");
test.addEventListener("click",testuserRegister);



// function for checking userdetail on masai server (login page)

let checkdetail = document.getElementById("checkdetail");

checkdetail.addEventListener("click", checkData);

let userData;

async function checkData(event){
    event.preventDefault();

    userData = {
        username : document.getElementById("username2").value,
        password : document.getElementById("password2").value, 
    };

    userData = JSON.stringify(userData);

    try{
        let url = "https://masai-api-mocker.herokuapp.com/auth/login";
        let responce = await fetch(url,{
            method:"POST",
            body:userData,
            headers: {
                "Content-Type" : "application/json"
            }
        })

        let res = await responce.json();
        alert("Login successfully");
        let user = document.getElementById("username2").value;
        getUser(user,res.token);
        document.getElementById("back").style.display = "none";
    }
    catch(err){
        if(err){
            document.getElementById("login_test").style.display = "inline-block";
        }
    }
}

// function for test user login

let testuserlogin = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("userData"));

    if(document.getElementById("username2").value == data.username && document.getElementById("password2").value == data.password){
        alert("Login successfull");
        document.getElementById("back").style.display = "none";
        document.getElementById("login_sucess").textContent = data.username;
        document.getElementById("login_sucess").style.fontSize = "12px";
        document.getElementById("login_sucess1").textContent = `Welcome ${data.username}`;
        document.getElementById("signout").style.display = "block";
    }
    else{
        alert("invalid credentials");
    }
}

let logtest = document.getElementById("login_test");
logtest.addEventListener("click",testuserlogin);

let getUser = async(user,token) => {
    let url = `https://masai-api-mocker.herokuapp.com/user/${user}`;

    try{
        let responce = await fetch(url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })

        let data = await responce.json();
        document.getElementById("login_sucess").textContent = data.username;
        document.getElementById("login_sucess").style.fontSize = "12px";
        document.getElementById("login_sucess1").textContent = `Welcome ${data.username}`;
        document.getElementById("signout").style.display = "block";
    }
    catch(err){
        console.log(err);
    }
}

// function to close log and register tab

let close = document.getElementById("closetab");

close.addEventListener("click", ()=>{
    document.getElementById("back").style.display = "none";
})

// function to append cart data to navbar

// a();

// function a(){
//     let arr = [];
//     let cart = {
//         image:"https://images.shopclues.com/images1/thumbnails/84619/320/320/136963262-84619914-1575020674.jpg",
//         name: "Sunshopping Tan Men Leatherite Pin-Hole Buckle Belt",
//         price: 159,
//         qty: 2,
//     };

//     arr.push(cart);    
//     localStorage.setItem("cartData", JSON.stringify(arr));
// }


let appendCartdata = () => {

    
    let location = document.querySelector(".listItem");
    let quantity = document.querySelector(".nItems");
    let showonNav = document.getElementById("qty");
    
    let data = JSON.parse(localStorage.getItem("cartData"));

    let x = "";

    data.forEach(({name,image,price,qty},index)=>{
        x += `<div>
                <img src="${image}" alt="">
            </div>
            <div id="rs">
                <p>${name}</p>
                <p>Rs.${price}</p>
                <p>Qty:${qty}</p>
            </div>`

        location.innerHTML = x;
        quantity.innerHTML = `<p>Your Shopping Cart (${index+1} Items)</p>`;
        showonNav.style.display = "block";
        showonNav.textContent = index+1;
    })
    
 
    
}
appendCartdata();

export default navbar;