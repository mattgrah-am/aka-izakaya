DROP TABLE IF EXISTS menu;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS contact;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(120),
    password VARCHAR(64),
    admin BOOLEAN
);

INSERT INTO
    users (email, password, admin)
VALUES
    (
        'izakaya@gmail.com',
        '$2b$10$S42U8YMPm8MlfzjNGh5Op.TVOaWDL2uJHku29oZNhsnVih9yPz2QO',
        true
    );

CREATE TABLE contact (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR (128),
    email VARCHAR (120),
    enquiry TEXT,
    unread BOOLEAN
);

INSERT INTO
    contact (name, email, enquiry, unread)
VALUES
    (
        'Stefan Fenech',
        'stefan@gmail.com',
        'Hi, your food was sick. Love it.',
        true
    );

CREATE TABLE menu(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(120),
    price INT,
    type VARCHAR(128),
    description TEXT,
    category VARCHAR(128)
);

INSERT INTO
    menu (name, price, type, description, category)
VALUES
    -- FOOD
    -- Snack
    (
        'Edamae',
        8,
        'food',
        'sea salt OR spicy shichimi',
        'snack'
    ),
    (
        'Lotus root chips',
        10,
        'food',
        'Chilli kewpie mayo',
        'snack'
    ),
    (
        'Karaage chicken',
        14,
        'food',
        'Crispy fried chicken topped with mayo',
        'snack'
    ),
    (
        'Tako Wasabi',
        11,
        'food',
        'Fresh raw baby octopus marinated in wasabi sauce.',
        'snack'
    ),
    (
        'Pan-fried Pork Gyoza',
        12,
        'food',
        'Pan-fried Japanese pork dumpling w. Soy sauce',
        'snack'
    ),
    -- Yakitori
    (
        'Negima',
        11,
        'food',
        'chicken thigh + shallot',
        'yakitori'
    ),
    (
        'Sasami',
        10,
        'food',
        'chicken tenderloin ',
        'yakitori'
    ),
    (
        'Tebakai',
        11,
        'food',
        'chicken wings',
        'yakitori'
    ),
    (
        'Tsukune',
        12,
        'food',
        'chicken minced meatballs',
        'yakitori'
    ),
    ('Kawa', 9, 'food', 'chicken skin', 'yakitori'),
    ('Hatsu', 8, 'food', 'chicken hearts', 'yakitori'),
    (
        'Saikoro',
        14,
        'food',
        'Wagyu grilled beef',
        'yakitori'
    ),
    ('Uzura', 8, 'food', 'quail eggs', 'yakitori'),
    (
        'Ton Ton Tomato',
        10,
        'food',
        'pork belly-wrapped cherry tomato',
        'yakitori'
    ),
    (
        'Agedashi Tofu',
        9,
        'food',
        'Soy dashi, tobiko fish roe, shallots',
        'yakitori'
    ),
    (
        'Eringi',
        8,
        'food',
        'king brown mushroom',
        'yakitori'
    ),
    (
        'Nasu',
        8,
        'food',
        'eggplant, yuzu miso',
        'yakitori'
    ),
    -- Sashimi
    (
        'Salmon',
        16,
        'food',
        'sliced salmon with ponzu and Wasabi',
        'sashimi'
    ),
    (
        'Octupus',
        15,
        'food',
        'boiled octopus with cucucmber sunomon',
        'sashimi'
    ),
    (
        'Snapper',
        18,
        'food',
        'sliced Snapper with chilli flakes',
        'sashimi'
    ),
    (
        'Tuna',
        16,
        'food',
        'thin tuna Steaks with daikon and ginger',
        'sashimi'
    ),
    (
        'Squid',
        13,
        'food',
        'squid roll with spring onions and wasabi',
        'sashimi'
    ),
    -- Dessert
    (
        'Matcha Cheesecake',
        12,
        'food',
        'japanese green tea cheesecake',
        'dessert'
    ),
    (
        'Banana Sushi',
        10,
        'food',
        'banana slices covered in chocolate',
        'dessert'
    ),
    (
        'Anmitsu',
        13,
        'food',
        'kanten jelly, azuki bean paste, mochi, fruits and ice cream',
        'dessert'
    ),
    (
        'Daifuku',
        12,
        'food',
        'stuffed sweet bean mochi balls',
        'dessert'
    ),
    (
        'Taiyaki',
        15,
        'food',
        'fish waffles stuffed with custard',
        'dessert'
    ),
    -- DRINKS
    -- Wine
    (
        'Château Mars',
        14,
        'drinks',
        'fruity, citrusy expression',
        'wine'
    ),
    (
        'Suntory Tomi No Oka',
        11,
        'drinks',
        'a red wine from Yamanashi-ken',
        'wine'
    ),
    (
        'Otaru Bijin Plum',
        12,
        'drinks',
        'perfect combination of sweet and sour',
        'wine'
    ),
    (
        'Histoire Red',
        12,
        'drinks',
        'well-balanced wine with moderate tannins and acidity',
        'wine'
    ),
    (
        'Koshu Sur Lie',
        15,
        'drinks',
        'fruity, dry, balanced wine',
        'wine'
    ),
    -- Beer
    (
        'Asahi Super Dry',
        10,
        'drinks',
        'light, crisp, bitter, and extremely sharp',
        'beer'
    ),
    (
        'Kirin Lager',
        9,
        'drinks',
        'pale lager has a nice grain aroma and crisp taste',
        'beer'
    ),
    (
        'Kirin Ichiban Shibori',
        11,
        'drinks',
        'mild, pure and smooth-tasting',
        'beer'
    ),
    (
        'Sapporo Nama',
        13,
        'drinks',
        'easy to drinks, distinctive, mature taste',
        'beer'
    ),
    (
        'Sapporo Yebisu',
        11,
        'drinks',
        'deep and rich intensity, with a clean finish',
        'beer'
    ),
    -- Sake
    (
        'Hakkaisan Tokubetsu',
        11,
        'drinks',
        'great summer sake served chilled',
        'sake'
    ),
    (
        'Kikusui Perfect Snow',
        13,
        'drinks',
        'reminiscent of pure snow, with a crisp flavor',
        'sake'
    ),
    (
        'Honjozo',
        8,
        'drinks',
        'savory, earthy, grainy, nutty flavor',
        'sake'
    ),
    (
        'Fukuju Mikagego',
        11,
        'drinks',
        'flavors of citrus, peach and steamed rice',
        'sake'
    ),
    (
        'Kenbishi Kuromatsu',
        10,
        'drinks',
        'cocoa, caramel, sour rice and almond flavor',
        'sake'
    ),
    -- Whiskey
    (
        'Yamazaki',
        17,
        'drinks',
        'fruity single malt',
        'whiskey'
    ),
    (
        'Nikka',
        19,
        'drinks',
        'delicious whisky a creamy texture and sweetness',
        'whiskey'
    ),
    (
        'Toki',
        18,
        'drinks',
        'notes of pink grapefruit, almonds and vanilla',
        'whiskey'
    ),
    (
        'Hakushu',
        19,
        'drinks',
        'delightful fruity flavour with a light peat quality',
        'whiskey'
    ),
    (
        'Akashi',
        16,
        'drinks',
        'smooth mouthfeel and buttery',
        'whiskey'
    );
