BEGIN;

DROP TABLE IF EXISTS customers, meals, orders;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(40) NOT NULL,
    phone VARCHAR(40)
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE orders (
    customer_id INT NOT NULL,
    meal_id INT NOT NULL,
    date VARCHAR(20) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (meal_id) REFERENCES meals(id)
);

COMMIT;