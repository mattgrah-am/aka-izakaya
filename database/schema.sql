DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS users;

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
    description TEXT,
    category VARCHAR(128)
);

INSERT INTO menu (name, price, type, description, category) VALUES 
('Nikka', 19, 'drink', 'The best whisky money can buy. Trust us.', 'Whisky'),
('Hakkaisan Tokubetsu junmai', 15, 'drink', 'Best served warm.', 'Sake'),
('Edemame', 6, 'food','Soy beans sprinkled with Maldon sea salt flakes', 'Entree'),
('Tuna Tartare', 15, 'food', 'Fresh yellow fin tuna, wasabi mayo and sourdough shards', 'Entree');
