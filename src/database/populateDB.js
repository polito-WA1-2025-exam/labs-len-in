import { initDb } from "./initDb.js";

const db = initDb();

// Insert Users
const insertUsers = `
    INSERT INTO USER (email, username, password) VALUES
    ('user1@example.com', 'UserOne', 'password1'),
    ('user2@example.com', 'UserTwo', 'password2'),
    ('user3@example.com', 'UserThree', 'password3'),
    ('user4@example.com', 'UserFour', 'password4'),
    ('user5@example.com', 'UserFive', 'password5'),
    ('user6@example.com', 'UserSix', 'password6'),
    ('user7@example.com', 'UserSeven', 'password7'),
    ('user8@example.com', 'UserEight', 'password8'),
    ('user9@example.com', 'UserNine', 'password9'),
    ('user10@example.com', 'UserTen', 'password10');
`;

// Insert Shops
const insertShops = `
    INSERT INTO SHOP (id, name, address, phone, foodType) VALUES
    (1, 'Bakery Bliss', '123 Main St', '123-456-7890', 'Bakery'),
    (2, 'Pizza Heaven', '456 Elm St', '234-567-8901', 'Pizza'),
    (3, 'Sushi Spot', '789 Oak St', '345-678-9012', 'Sushi'),
    (4, 'Burger House', '101 Pine St', '456-789-0123', 'Burgers'),
    (5, 'Vegan Delight', '202 Maple St', '567-890-1234', 'Vegan'),
    (6, 'Taco Town', '303 Cedar St', '678-901-2345', 'Mexican'),
    (7, 'Pasta Paradise', '404 Birch St', '789-012-3456', 'Italian'),
    (8, 'Salad Stop', '505 Walnut St', '890-123-4567', 'Healthy'),
    (9, 'Ice Cream World', '606 Chestnut St', '901-234-5678', 'Desserts'),
    (10, 'Coffee Corner', '707 Ash St', '012-345-6789', 'Beverages');
`;

// Insert User-Shop Relationships
const insertUserShops = `
    INSERT INTO USERSHOP (userEmail, shopId) VALUES
    ('user1@example.com', 1),
    ('user2@example.com', 2),
    ('user3@example.com', 3),
    ('user4@example.com', 4),
    ('user5@example.com', 5),
    ('user6@example.com', 6),
    ('user7@example.com', 7),
    ('user8@example.com', 8),
    ('user9@example.com', 9),
    ('user10@example.com', 10);
`;

// Insert Bags
const insertBags = `
    INSERT INTO BAG (id, type, items, date, size, status, price, storeId) VALUES
    (1, 'reserved', 'Bread, Pastries', '2024-03-10', 'S', 'available', 10.99, 1),
    (2, 'Available', 'Pizza, Soda', '2024-03-10', 'M', 'reserved', 15.99, 2),
    (3, 'reserved', 'Sushi Rolls', '2024-03-10', 'L', 'available', 18.99, 3),
    (4, 'Available', 'Burgers, Fries', '2024-03-10', 'M', 'reserved', 12.99, 4),
    (5, 'reserved', 'Vegan Salad', '2024-03-10', 'S', 'available', 9.99, 5),
    (6, 'Available', 'Tacos, Nachos', '2024-03-10', 'L', 'reserved', 14.99, 6),
    (7, 'reserved', 'Pasta, Garlic Bread', '2024-03-10', 'M', 'available', 16.99, 7),
    (8, 'Available', 'Salad, Smoothie', '2024-03-10', 'S', 'reserved', 11.99, 8),
    (9, 'reserved', 'Ice Cream, Brownie', '2024-03-10', 'M', 'available', 7.99, 9),
    (10, 'Available', 'Coffee, Croissant', '2024-03-10', 'L', 'reserved', 6.99, 10);
`;

// Execute insert queries
db.serialize(() => {
    db.run(insertUsers, (err) => {
        if (err) console.error("Error inserting users:", err);
        else console.log("Users inserted successfully");
    });

    db.run(insertShops, (err) => {
        if (err) console.error("Error inserting shops:", err);
        else console.log("Shops inserted successfully");
    });

    db.run(insertUserShops, (err) => {
        if (err) console.error("Error inserting user-shop relationships:", err);
        else console.log("User-Shop relationships inserted successfully");
    });

    db.run(insertBags, (err) => {
        if (err) console.error("Error inserting bags:", err);
        else console.log("Bags inserted successfully");
    });
});

db.close();