BEGIN;

DROP TABLE IF EXISTS customers, meals, orders;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(40) NOT NULL,
    phone VARCHAR(40)
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    mealName VARCHAR(40) NOT NULL,
    image_url  VARCHAR(255),
    price INT NOT NULL
);

CREATE TABLE orders (
    customer_id INT NOT NULL,
    meal_id INT NOT NULL,
    date VARCHAR(20) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (meal_id) REFERENCES meals(id)
);

INSERT INTO meals (name, image_url, price) VALUES ('Bangda fish','https://www.licious.in/blog/wp-content/uploads/2022/05/shutterstock_1116124928.jpg', 34),
    ('Burger', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/All-American-Hamburgers_EXPS_CWAS22_29321_P2_MD_04_19_1b_v2.jpg?fit=700,700', 28),
    ('Chicken', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/3/0/FN_Lemon-Herb-Roasted-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384541143648.jpeg', 45),
    ('Pizza', 'https://www.annisarestaurant.com/wp-content/uploads/2022/08/how-long-is-pizza-good-for-in-the-fridge-1.jpg', 20)
COMMIT;