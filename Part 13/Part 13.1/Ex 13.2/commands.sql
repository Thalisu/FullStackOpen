CREATE TABLE blogs (id SERIAL PRIMARY KEY, author text, url text NOT NULL, title text NOT NULL, likes INTEGER DEFAULT 0);

\d blogs

insert into blogs (author, url, title) values ('anything1', 'anything2.com', 'anything3')
insert into blogs (author, url, title) values ('anything4', 'anything5.com', 'anything6')