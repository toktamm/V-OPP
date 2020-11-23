DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    description TEXT,
    thumbnail_photo_url VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    post_code VARCHAR(255) NOT NULL,
    date_posted DATE NOT NULL,
    start_date DATE NOT NULL,
    requirements TEXT,
    additional_info TEXT,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    user_id INTEGER REFERENCES users(id)
);