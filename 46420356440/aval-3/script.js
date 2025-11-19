<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UI Layout</title>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #0d1b4c; /* azul escuro de fundo */
        color: white;
    }

    /* HEADER */
    .header {
        background: #1e3da8;
        padding: 25px 0;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 2px;
    }

    /* CARD PRINCIPAL */
    .card {
        background: #1f2c5c;
        margin: 25px auto;
        width: 90%;
        max-width: 900px;
        border-radius: 15px;
        padding: 25px;
    }

    .profile {
        display: flex;
        align-items: center;
    }

    .profile img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin-right: 15px;
        border: 2px solid #4fa3ff;
    }

    .name {
        font-size: 24px;
        font-weight: bold;
    }

    .phones-section {
        background: #ffffff;
        border-radius: 12px;
        padding: 25px;
        margin-top: 20px;
        text-align: center;
        color: black;
    }

    .phones-images {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .phones-images img {
        width: 30%;
        min-width: 180px;

