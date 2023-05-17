DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS how_to_style;
DROP TABLE IF EXISTS review;

CREATE TABLE Product (
    id INT PRIMARY KEY,
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

CREATE TABLE Size (
    id INT PRIMARY KEY,
    product_id INT,
    size INT,
    stock INT,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE Image (
    id INT PRIMARY KEY,
    product_id INT,
    image_url TEXT,
    element VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE HowToStyle (
    id INT PRIMARY KEY,
    product_id INT,
    image_url TEXT,
    user_name VARCHAR(255),
    link TEXT,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);

CREATE TABLE Review (
    id INT PRIMARY KEY,
    product_id INT,
    stars INT,
    account VARCHAR(255),
    image_url TEXT,
    likes INT,
    title VARCHAR(255),
    description TEXT,
    satisfaction BOOL,
    comfort BOOL,
    color BOOL,
    appearance BOOL,
    quality BOOL,
    FOREIGN KEY (product_id) REFERENCES Product (id)
);