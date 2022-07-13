CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cognome VARCHAR(255),
    email VARCHAR(255) ,
    indirizzo VARCHAR(255),
    password VARCHAR(255),
    updated_at DATETIME,
    created_at DATETIME
) Engine=InnoDB;
CREATE TABLE immagini_user(  
    id int AUTO_INCREMENT PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    immagini_id INT REFERENCES immaginis(id),
    updated_at DATETIME,
    created_at DATETIME
 )Engine=InnoDB;
 CREATE TABLE immaginis(
    id int AUTO_INCREMENT PRIMARY KEY,
    url_ VARCHAR(255),
    updated_at TIMESTAMP NOT NULL,
    created_at DATETIME NOT NULL
)Engine=InnoDB;

CREATE TABLE carrello(  
    id int AUTO_INCREMENT PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    immagini_id INT REFERENCES immaginis(id),
    updated_at DATETIME,
    created_at DATETIME
 )Engine=InnoDB;


 CREATE TABLE commenti(  
    id int AUTO_INCREMENT PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    immagini_id INT REFERENCES immaginis(id),
    nome_user VARCHAR(255) REFERENCES users(nome),
    commento VARCHAR(255),
    updated_at DATETIME,
    created_at DATETIME
 )Engine=InnoDB;
