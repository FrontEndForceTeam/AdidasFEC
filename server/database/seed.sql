-- SEED FILE
INSERT INTO product 
(rating, type, price, discounted_price, details, description, description_title, description_image, preview_image)
VALUES 
(4.7, 'shoe', 130.00, 84.50,'Originals' , 
'If you had to decide between style and innovation, which would you choose? Silly question. You shouldnt have to make a decision like that. Just lace up in these adidas ZX 5K Boost Shoes and be done with it. Built on the innovative spirit of the ZX design code, they have a full-length Boost midsole wrapped in translucent tooling. Suede overlays and reflective details accent the mesh upper for style that shines.', 
'Progressive trainers with modern style.', 
'https://assets.adidas.com/images/w_600,f_auto,q_auto/0cb07ce217a64c1ca3a1ad7400c40178_9366/ZX_5K_Boost_Shoes_Black_GX8664.jpg', 
'https://assets.adidas.com/images/w_600,f_auto,q_auto/e871521fbe724ca0b713ad7400c3e265_9366/ZX_5K_Boost_Shoes_Black_GX8664_01_standard.jpg');

INSERT INTO image
(product_id, image_url, element, i)
VALUES
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/e871521fbe724ca0b713ad7400c3e265_9366/ZX_5K_Boost_Shoes_Black_GX8664_01_standard.jpg',
'gallery', 1),
(1,'https://assets.adidas.com/videos/h_420,c_fill,q_auto,f_auto/bf9b952db5544c428e8eadd0011d6b90_d98c/ZX_5K_Boost_Shoes_Black_GX8664_video.mp4',
'gallery', 2),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/515232f07a90440fbe15ad7400de2c14_9366/ZX_5K_Boost_Shoes_Black_GX8664_012_hover_standard.jpg',
'gallery', 3),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/0cb07ce217a64c1ca3a1ad7400c40178_9366/ZX_5K_Boost_Shoes_Black_GX8664_04_standard.jpg',
'gallery', 4),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/1672ea2b94e741829faaad7400c40a1a_9366/ZX_5K_Boost_Shoes_Black_GX8664_05_standard.jpg',
'gallery', 5),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/2192c76a7c3f46dbb9faad7400c3ea68_9366/ZX_5K_Boost_Shoes_Black_GX8664_06_standard.jpg',
'gallery', 6),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/3fc04018ac494b60b30aad7400c42b72_9366/ZX_5K_Boost_Shoes_Black_GX8664_09_standard.jpg',
'gallery', 7),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/a6fdbf2b1cf64dd59576ad7400c411ba_9366/ZX_5K_Boost_Shoes_Black_GX8664_41_detail.jpg',
'gallery', 8),
(1,'https://assets.adidas.com/images/w_600,f_auto,q_auto/65d9ab2de6f04213a484ad7400c418bd_9366/ZX_5K_Boost_Shoes_Black_GX8664_42_detail.jpg',
'gallery', 9);