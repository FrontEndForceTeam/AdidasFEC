import { useState } from "react";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header className={styles["mainheader-container"]}>
      <ul className={styles["customer-list"]}>
        <li>
          <a href="#">help</a>
        </li>
        <li>
          <a href="#">orders and returns</a>
        </li>
        <li>
          <a href="#">gift cards</a>
        </li>
        <li>
          <a href="#">become a member</a>
        </li>
      </ul>
      <div className={styles["mainheader-bottom"]}>
        <div className={styles["logo-container"]}>
          <a href="#">
            <img src="../../../../public/adidas-icon.svg" alt="" />
          </a>
        </div>
        <ul className={styles["flyout-menu"]}>
          <li
            className={styles["categories"]}
            onMouseEnter={() => handleMouseEnter("MEN")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">MEN</a>
            {hoveredItem === "MEN" && (
              <div className={styles["submenu-container"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          NEW & TRENDING
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Trainer Releases</a>
                        </li>
                        <li>
                          <a href="#">Only at adidas</a>
                        </li>
                        <li>
                          <a href="#">Trending</a>
                        </li>
                        <li>
                          <a href="#">Summer Shop</a>
                        </li>
                        <li>
                          <a href="#">HeatspawnPack</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">Outlet</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SHOES</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Trainers</a>
                        </li>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Slides & Sandals</a>
                        </li>
                        <li>
                          <a href="#">Hiking & Outdoor</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Walking</a>
                        </li>
                        <li>
                          <a href="#">Basketball</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>CLOTHING</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                        <li>
                          <a href="#">T-shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Joggers & Tracksuit Bottoms</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Swimwear</a>
                        </li>
                        <li>
                          <a href="#">Trousers</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Football Shirts</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          ACCESSORIES
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">Headwear</a>
                        </li>
                        <li>
                          <a href="#">All Bags</a>
                        </li>
                        <li>
                          <a href="#">Balls</a>
                        </li>
                        <li>
                          <a href="#">Eyewear</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SPORTS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Tennis</a>
                        </li>
                        <li>
                          <a href="#">Hiking & Outdoor</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>BRANDS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                        <li>
                          <a href="#">Sportswear</a>
                        </li>
                        <li>
                          <a href="#">Terrex</a>
                        </li>
                        <li>
                          <a href="#">Y-3</a>
                        </li>
                        <li>
                          <a href="#">Help End Plastic Waste</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* <hr className={styles["column-separator"]} /> */}
                <ul className={styles["bottom-links"]}>
                  <li>
                    <a href="#">All Men's</a>
                  </li>
                  <li>
                    <a href="#">All Men's Shoes</a>
                  </li>
                  <li>
                    <a href="#">All Men's Clothing</a>
                  </li>
                  <li>
                    <a href="#">All Men's Accessories</a>
                  </li>
                  <li>
                    <a href="#">Other Sports</a>
                  </li>
                  <li>
                    <a href="#">All Men's Originals</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]}
            onMouseEnter={() => handleMouseEnter("WOMEN")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">WOMEN</a>
            {hoveredItem === "WOMEN" && (
              <div className={styles["submenu-container-women"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          NEW & TRENDING
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Trainer Releases</a>
                        </li>
                        <li>
                          <a href="#">Only at adidas</a>
                        </li>
                        <li>
                          <a href="#">Trending</a>
                        </li>
                        <li>
                          <a href="#">Summer Shop</a>
                        </li>
                        <li>
                          <a href="#">Platform</a>
                        </li>
                        <li>
                          <a href="#">HeatspawnPack</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">Outlet</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SHOES</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Trainers</a>
                        </li>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Slides & Sandals</a>
                        </li>
                        <li>
                          <a href="#">Hiking & Outdoor</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Walking</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Trainers under £60</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>CLOTHING</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                        <li>
                          <a href="#">T-shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Tights & Leggings</a>
                        </li>
                        <li>
                          <a href="#">Joggers & Tracksuit Bottoms</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Sports Bras</a>
                        </li>
                        <li>
                          <a href="#">Swimwear</a>
                        </li>
                        <li>
                          <a href="#">Plus Size</a>
                        </li>
                        <li>
                          <a href="#">Skirts & Dresses</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Trousers</a>
                        </li>
                        <li>
                          <a href="#">Football Jerseys</a>
                        </li>
                        <li>
                          <a href="#">Maternity</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          ACCESSORIES
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">All Bags</a>
                        </li>
                        <li>
                          <a href="#">Headwear</a>
                        </li>
                        <li>
                          <a href="#">Balls</a>
                        </li>
                        <li>
                          <a href="#">Eyewear</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SPORTS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Swimming</a>
                        </li>
                        <li>
                          <a href="#">Tennis</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Hiking & Outdoor</a>
                        </li>
                        <li>
                          <a href="#">Yoga</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>BRANDS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                        <li>
                          <a href="#">Sportswear</a>
                        </li>
                        <li>
                          <a href="#">Terrex</a>
                        </li>
                        <li>
                          <a href="#">Y-3</a>
                        </li>
                        <li>
                          <a href="#">Stella McCartney</a>
                        </li>
                        <li>
                          <a href="#">Help End Plastic Waste</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className={styles["bottom-links-women"]}>
                  <li>
                    <a href="#">All Women's</a>
                  </li>
                  <li>
                    <a href="#">All Women's Shoes</a>
                  </li>
                  <li>
                    <a href="#">All Women's Clothing</a>
                  </li>
                  <li>
                    <a href="#">All Women's Accessories</a>
                  </li>
                  <li>
                    <a href="#">Other Sports</a>
                  </li>
                  <li>
                    <a href="#">All Women's Originals</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]} onMouseEnter={() => handleMouseEnter("KIDS")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">KIDS</a>
            {hoveredItem === "KIDS" && (
              <div className={styles["submenu-container-kids"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          NEW & TRENDING
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Only at adidas</a>
                        </li>
                        <li>
                          <a href="#">Trending</a>
                        </li>
                        <li>
                          <a href="#">Summer Shop</a>
                        </li>
                        <li>
                          <a href="#">HeatspawnPack</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">Outlet</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>BOYS SHOES</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Sneakers</a>
                        </li>
                        <li>
                          <a href="#">Slides & Sandals</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Outdoor</a>
                        </li>
                      </ul>
                      <a href="#">
                        <div className={styles["column-title"]}>GIRLS SHOES</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Sneakers</a>
                        </li>
                        <li>
                          <a href="#">Slides & Sandals</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Outdoor</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>BOYS CLOTHING</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Tracksuit</a>
                        </li>
                        <li>
                          <a href="#">Complete Sets</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Trousers</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Football Jerseys</a>
                        </li>
                      </ul>
                      <a href="#">
                        <div className={styles["column-title"]}>GIRLS CLOTHING</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Tracksuit</a>
                        </li>
                        <li>
                          <a href="#">Complete Sets</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Trousers</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Football Jerseys</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column_kids"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          SHOP BY SHOE SIZE
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Babies & Toddlers (0K - 9.5K) </a>
                        </li>
                        <li>
                          <a href="#">Children (10K - 2.5)</a>
                        </li>
                        <li>
                          <a href="#">Teenagers (3 - 6.5)</a>
                        </li>
                      </ul>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          SHOP BY CLOTHING SIZE
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Babies & Toddlers (0-3M - 3-4Y) </a>
                        </li>
                        <li>
                          <a href="#">Children (4-5Y - 7-8Y)</a>
                        </li>
                        <li>
                          <a href="#">Teenagers (8-9Y - 15-16Y)</a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          ACCESSORIES
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">Headwear</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SPORTS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Swimming</a>
                        </li>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Basketball</a>
                        </li>
                        <li>
                          <a href="#">Tennis</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Outdoor</a>
                        </li>
                      </ul>
                      <a href="#">
                        <div className={styles["column-title"]}>COLLECTIONS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Disney</a>
                        </li>
                        <li>
                          <a href="#">LEGO</a>
                        </li>
                        <li>
                          <a href="#">Hello Kitty</a>
                        </li>
                        <li>
                          <a href="#">Finding Nemo</a>
                        </li>
                        <li>
                          <a href="#">Moomin</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                  </li>
                </ul>
                <ul className={styles["bottom-links-kids"]}>
                  <li>
                    <a href="#">All Kids</a>
                  </li>
                  <li>
                    <a href="#">All Kids' Shoes</a>
                  </li>
                  <li>
                    <a href="#">All Kids' Clothing</a>
                  </li>
                  <li>
                    <a href="#">All Kids' Accessories</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]} onMouseEnter={() => handleMouseEnter("NEW")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">NEW</a>
            {hoveredItem === "NEW" && (
              <div className={styles["submenu-container-new"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          NEW FOR MEN
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>NEW FOR WOMEN</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>NEW FOR KIDS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          NEW FOR UNISEX
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>SPORTS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>COLLECTIONS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Stan Smith</a>
                        </li>
                        <li>
                          <a href="#">Adicolor</a>
                        </li>
                        <li>
                          <a href="#">Only at adidas</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className={styles["bottom-links-new"]}>
                  <li>
                    <a href="#">All Originals</a>
                  </li>
                  <li>
                    <a href="#">All Sportswear</a>
                  </li>
                  <li>
                    <a href="#">All Terrex</a>
                  </li>
                  <li>
                    <a href="#">All Y-3</a>
                  </li>
                  <li>
                    <a href="#">All Stella McCartney</a>
                  </li>
                  <li>
                    <a href="#">Our Better Choice Range</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]} onMouseEnter={() => handleMouseEnter("SPORTS")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">SPORTS</a>
            {hoveredItem === "SPORTS" && (
              <div className={styles["submenu-container-sports"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                         FOOTBALL
                        </div>
                      </a>
                      <ul>
                          <div className={styles['sport-picture']}>
                          <img src="./img/football-ss23-heatspawn-app-shop-banner_tcm143-1014705.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Boots</a>
                        </li>
                        <li>
                          <a href="#">Clubs</a>
                        </li>
                        <li>
                          <a href="#">National Teams</a>
                        </li>
                        <li>
                          <a href="#">Training Wear</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                        <a href="#">All Clothing</a>
                        </li>
                        <li>
                        <a href="#">All Accessories</a>
                        </li>
                        <li>
                        <a href="#">Predator</a>
                        </li>
                        <li>
                        <a href="#">X</a>
                        </li>
                        <li>
                        <a href="#">Copa</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>RUNNING</div>
                      </a>
                      <ul>
                         <div className={styles['sport-picture-running']}>
                          <img src="./img/sports-running-2019-new-ui_tcm143-670244.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">Everyday running shoes</a>
                        </li>
                        <li>
                        <a href="#">For beginners</a>
                        </li>
                        <li>
                        <a href="#">Racing & race preparation</a>
                        </li>
                        <li>
                        <a href="#">Long distance running shoes</a>
                        </li>
                        <li>
                        <a href="#">adidas Runners</a>
                        </li>
                        <li>
                        <a href="#">Running shoe guide</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>OUTDOOR</div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-dave']} style={{ backgroundImage: 'url(./img/dave.png)' }}>
                          </div>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">Hiking</a>
                        </li>
                        <li>
                        <a href="#">Hiking boots</a>
                        </li>
                        <li>
                        <a href="#">Mountain Biking</a>
                        </li>
                        <li>
                        <a href="#">Climbing</a>
                        </li>
                        <li>
                        <a href="#">Mountaineering</a>
                        </li>
                        <li>
                        <a href="#">Winter Sports</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          GYM & TRAINING
                        </div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-running']}>
                          <img src="./img/3178091_Performance_Onsites_Training_HIIT_SS23_Navigation_Header_Image_tcm143-1012445.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">HIIT</a>
                        </li>
                        <li>
                        <a href="#">Strength training</a>
                        </li>
                        <li>
                        <a href="#">Yoga & Studio</a>
                        </li>
                        <li>
                        <a href="#">TECHFIT</a>
                        </li>
                        <li>
                        <a href="#">Sports Bra Guide</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>GOLF</div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-golf']}>
                          <img src="./img/golf-SS23-Ultimate365tour-global-launch-clp-masthead-d_tcm143-1013775.jpg" alt="" />
                          </div>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <div className={styles.separator}></div>
                        </li>
                        <li>
                          <a href="#">adicross</a>
                        </li>
                        <li>
                        <a href="#">Codechaos</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>OTHER SPORTS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Winter Sports</a>
                        </li>
                        <li>
                          <a href="#">Tennis</a>
                        </li>
                        <li>
                          <a href="#">Swimming</a>
                        </li>
                        <li>
                          <a href="#">Cycling</a>
                        </li>
                        <li>
                          <a href="#">Basketball</a>
                        </li>
                        <li>
                          <a href="#">Rugby</a>
                        </li>
                        <li>
                          <a href="#">Skateboarding</a>
                        </li>
                        <li>
                          <a href="#">Weightlifting</a>
                        </li>
                        <li>
                          <a href="#">Field Hockey</a>
                        </li>
                        <li>
                          <a href="#">Boxing</a>
                        </li>
                        <li>
                          <a href="#">Handball</a>
                        </li>
                        <li>
                          <a href="#">Yoga</a>
                        </li>
                        <li>
                          <a href="#">Padel Tennis</a>
                        </li>
                        <li>
                          <a href="#">Volleyball</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className={styles["bottom-links-sports"]}>
                  <li>
                    <a href="#">All Football</a>
                  </li>
                  <li>
                    <a href="#">All Running</a>
                  </li>
                  <li>
                    <a href="#">All Outdoor</a>
                  </li>
                  <li>
                    <a href="#">All Gym & Training</a>
                  </li>
                  <li>
                    <a href="#">All Golf</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]} onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">COLLECTIONS</a>
            {hoveredItem === "COLLECTIONS" && (
              <div className={styles["submenu-container-collections"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                         TRENDING NOW
                        </div>
                      </a>
                      <ul>
                          <div className={styles['sport-picture-running-collection']}>
                          <img src="./img/collections-trending-image-new-ui_tcm143-670452.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">adidas Blog</a>
                        </li>
                        <li>
                          <a href="#">Cargo Pants</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Track Suits</a>
                        </li>
                        <li>
                          <a href="#">Waterproof Jackets</a>
                        </li>
                        <li>
                          <a href="#">Down Jackets</a>
                        </li>
                        <li>
                          <a href="#">Gilets</a>
                        </li>
                        <li>
                          <a href="#">Gilets</a>
                        </li>
                        <li>
                          <a href="#">Black Trainers</a>
                        </li>
                        <li>
                          <a href="#">Gloves</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>RUNNING</div>
                      </a>
                      <ul>
                         <div className={styles['sport-picture-running-collection']}>
                          <img src="./img/collections-running-image-new-ui_tcm143-670450.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Running Trainers</a>
                        </li>
                        <li>
                          <a href="#">Ultraboost</a>
                        </li>
                        <li>
                          <a href="#">Adizero</a>
                        </li>
                        <li>
                          <a href="#">4DFWD</a>
                        </li>
                        <li>
                          <a href="#">Trail Running Shoes</a>
                        </li>
                        <li>
                          <a href="#">Running T-Shirts</a>
                        </li>
                        <li>
                          <a href="#">Running Shorts</a>
                        </li>
                        <li>
                          <a href="#">Running Leggings</a>
                        </li>
                        <li>
                          <a href="#">Running Jackets</a>
                        </li>
                        <li>
                          <a href="#">Running Socks</a>
                        </li> 
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>FOOTBALL</div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-running-collection']}>
                          <img src="./img/2226727-CAM_Dotcom_GlobalAdapt_EU_FWC_OMB_SS22_172x80_tcm143-874255.jpg" alt="" />
                          </div>
                        <li>
                          <a href="#">Firm Ground Football Boots</a>
                        </li>
                        <li>
                          <a href="#">Soft Ground Football Boots</a>
                        </li>
                        <li>
                          <a href="#">Indoor Football shoes</a>
                        </li>
                        <li>
                          <a href="#">Football Shorts</a>
                        </li>
                        <li>
                          <a href="#">Football Shin Guards</a>
                        </li>
                        <li>
                          <a href="#">Football Socks</a>
                        </li>
                        <li>
                          <a href="#">Arsenal Kits</a>
                        </li>
                        <li>
                          <a href="#">Manchester United Kits</a>
                        </li>
                        <li>
                          <a href="#">Lionel Messi Collection</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          CLOTHING
                        </div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-running-collection']}>
                          <img src="./img/collections-clothing-image-new-ui_tcm143-670446.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Hoodies</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Track Tops</a>
                        </li>
                        <li>
                          <a href="#">Trackpants</a>
                        </li>
                        <li>
                          <a href="#">Shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Yoga Tights & Leggings</a>
                        </li>
                        <li>
                          <a href="#">Tank Tops</a>
                        </li>
                        <li>
                          <a href="#">Maternity</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>OUTDOOR</div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-golf-collection']}>
                          <img src="./img/OUTDOOR_IMAGE_tcm143-925998.webp" alt="" />
                          </div>
                        <li>
                          <a href="#">Terrex Agravic</a>
                        </li>
                        <li>
                          <a href="#">Terrex Free Hiker</a>
                        </li>
                        <li>
                          <a href="#">Terrex AX</a>
                        </li>
                        <li>
                          <a href="#">Terrex Swift</a>
                        </li>
                        <li>
                          <a href="#">Terrex Skychaser</a>
                        </li>
                        <li>
                          <a href="#">Five Ten Sleuth</a>
                        </li>
                        <li>
                          <a href="#">Terrex Waterproof</a>
                        </li>
                        <li>
                          <a href="#">Terrex Waterproof</a>
                        </li>
                        <li>
                          <a href="#">Terrex Making Better Choices</a>
                        </li>
                        <li>
                          <a href="#">MYSHELTER</a>
                        </li>
                        <li>
                          <a href="#">XPLORIC</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>ONLY AT ADIDAS</div>
                      </a>
                      <ul>
                      <div className={styles['sport-picture-dave-collection']} style={{ backgroundImage: 'url(./img/dave2.png)' }}>
                          </div>
                        <li>
                          <a href="#">Member Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Men's Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Women's Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Kids' Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Originals Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Sportswear Exclusives</a>
                        </li>
                        <li>
                          <a href="#">Performance Exclusives</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles["categories"]} onMouseEnter={() => handleMouseEnter("OUTLET")}
            onMouseLeave={handleMouseLeave}>
            <a href="#">OUTLET</a>
            {hoveredItem === "OUTLET" && (
              <div className={styles["submenu-container-outlet"]}>
                <ul className={styles["men-content-1"]}>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          MEN
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">All Men's</a>
                        </li>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Hoodies & Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Joggers & Tracksuit Bottoms</a>
                        </li>
                        <li>
                          <a href="#">Hoodies & Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Sliders & Flip-Flops</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>WOMEN</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">All Women's</a>
                        </li>
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Hoodies & Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Joggers & Tracksuit Bottoms</a>
                        </li>
                        <li>
                          <a href="#">Hoodies & Sweatshirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Leggings</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Sliders & Flip-Flops</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Skirts & Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>KIDS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">All Kids</a>
                        </li>
                        <li>
                          <a href="#">Kids Shoes</a>
                        </li>
                        <li>
                          <a href="#">Tracksuits</a>
                        </li>
                        <li>
                          <a href="#">Shorts</a>
                        </li>
                        <li>
                          <a href="#">Boys Clothing</a>
                        </li>
                        <li>
                          <a href="#">Girls Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>
                          SPORTS
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Gym & Training</a>
                        </li>
                        <li>
                          <a href="#">Running</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                        <li>
                          <a href="#">Outdoor</a>
                        </li>
                        <li>
                          <a href="#">Golf</a>
                        </li>
                        <li>
                          <a href="#">Winter Sports</a>
                        </li>
                        <li>
                          <a href="#">Tennis</a>
                        </li>
                        <li>
                          <a href="#">Swimming</a>
                        </li>
                        <li>
                          <a href="#">Basketball</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={styles["_column"]}>
                      <a href="#">
                        <div className={styles["column-title"]}>COLLECTIONS</div>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Originals</a>
                        </li>
                        <li>
                          <a href="#">Ultraboost</a>
                        </li>
                        <li>
                          <a href="#">Ozweego</a>
                        </li>
                        <li>
                          <a href="#">ZX</a>
                        </li>
                        <li>
                          <a href="#">NMD</a>
                        </li>
                        <li>
                          <a href="#">Adilette</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className={styles["auxiliary-menu"]}>
          <div className={styles["searchbar-container"]}>
            <input
              placeholder="Search"
              className={styles["searchbar"]}
              type="text"
            />
            <div className={styles["search-icon"]}>
              <span className={styles["search-icon-wrapper"]}>
                <img src="./img/search_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
              </span>
            </div>
          </div>
          <div className={styles["customer-info"]}>
            <span className={styles["customer-info-wrapper"]}>
              <a href="">
                <img src="./img/user-icon.svg" alt="" />
              </a>
            </span>
          </div>
          <div className={styles["wishlist-info"]}>
            <span className={styles["wishlist-info-wrapper"]}>
              <a href="">
                <img src="./img/heart-icon.svg" alt="" />
              </a>
            </span>
          </div>
          <div className={styles["cart-info"]}>
            <span className={styles["cart-info-wrapper"]}>
              <a href="">
                <img src="./img/shopping-list.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

