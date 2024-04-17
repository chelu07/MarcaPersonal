CREATE DATABASE laura_app;
USE laura_app;

CREATE TABLE user (
    user_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(100) ,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    avatar VARCHAR(200),
    user_type TINYINT NOT NULL DEFAULT 2,
    user_is_deleted BOOLEAN not null DEFAULT false
);

CREATE TABLE product (
    product_id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(600) NOT NULL,
    cover VARCHAR(200) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    product_is_deleted BOOLEAN  NOT NULL DEFAULT true,
    user_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_user_1 FOREIGN KEY (user_id)
    REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE user_likes_product (
    user_id INT UNSIGNED NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,
    liked BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (user_id, product_id),
    CONSTRAINT fk_user_3 FOREIGN KEY (user_id)
    REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_product_3 FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE
);



