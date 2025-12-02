body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
}

/* NAV */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #003366; /* azul igreja */
    padding: 10px 20px;
}

.logo {
    width: 60px;
    border-radius: 50%;
    background-color: white;
    padding: 5px;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

/* PERFIL */
.perfil {
    text-align: center;
    padding: 30px 20px;
    background-color: #fff;
}

.foto-perfil {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.perfil h1 {
    margin-top: 10px;
    color: #003366;
}

.perfil h3 {
    color: #006699;
}

/* CARDS */
.cards-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    padding-bottom: 15px;
    border: 2px solid #003366;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.card img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

.card h2 {
    margin: 15px;
    color: #003366;
}

.card .data {
    margin: 0 15px;
    color: #006699;
    font-weight: bold;
}

.card p {
    margin: 10px 15px;
}