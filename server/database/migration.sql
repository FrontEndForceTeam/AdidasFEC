DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS how_to_style;
DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    rating FLOAT,
    type VARCHAR(255),
    price FLOAT,
    discounted_price FLOAT,
    details TEXT,
    description TEXT,
    description_title VARCHAR(255),
    description_image TEXT,
    preview_image TEXT
);

CREATE TABLE size (
    product_id INT,
    size FLOAT,
    stock INT,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE image (
    product_id INT,
    image_url TEXT,
    element VARCHAR(255),
    i int,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE how_to_style (
    product_id INT,
    image_url TEXT,
    user_name VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE review (
    product_id INT,
    stars INT,
    account VARCHAR(255),
    image_url TEXT,
    likes INT,
    title VARCHAR(255),
    body TEXT,
    satisfaction BOOLEAN,
    comfort BOOLEAN,
    color BOOLEAN,
    appearance BOOLEAN,
    quality BOOLEAN,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);