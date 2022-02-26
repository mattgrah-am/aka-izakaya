CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(120),
    password VARCHAR(64),
    admin BOOLEAN
);

INSERT INTO users (email, password, admin) VALUES ('izakaya@gmail.com', 'izakaya', true);

CREATE TABLE menu(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(120),
    price INT,
    type VARCHAR(128),
    category VARCHAR(128)
);

INSERT INTO menu (name, price, type, category) VALUES 
('Nikka', 19, 'Drink', 'Whisky'),
('Hakkaisan Tokubetsu junmai', 15, 'Drink', 'Sake'),
('Edemame', 6, 'Food', 'Entree'),
('Tuna Tartare', 15, 'Food', 'Entree');
