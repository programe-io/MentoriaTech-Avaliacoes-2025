<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>quest3</title>
    <link href="./output.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        /* Adiciona um estilo para o cursor indicar que os cards são clicáveis */
        .post-card {
            cursor: pointer;
            transition: transform 0.2s;
        }
        .post-card:hover {
            transform: scale(1.02);
        }
    </style>
</head>

<body class="bg-gradient-to-b from-blue-800 to-blue-900 h-screen text-white">
    
    <header class="shadow-md p-5 flex">

        <div class="flex-1 uppercase font-bold text-center md:text-left">
            logo
        </div>

        <nav class="font-bold gap-3 hidden md:flex">
            <a href="#">Inicio</a>
            <a href="#">Amigas</a>
            <a href="#">Perfil</a>
        </nav>

    </header>

    <main class="py-4 px-2 flex flex-col gap-3 md:flex-row items-center">
 
        <div class="bg-gray-800 py-4 rounded-lg shadow-md post-card">

            <div class="flex items-center pb-4 px-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-blues-500" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUXFxgXGBgXGBYYGhgYGBgXGBgbGxgaHiggHR0oHRsXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyAtKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rKy0tLS0tLS0tLS0tLS0tLTctLf/AABEIARYAtQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwIDCAH/xABCEAABAwIDBQYEAwYEBgMBAAABAAIRAyEEEjEFBkFRYQcTInGBkTKhsfBCwdEUI1JiguFykqLxCBUzU3OyFkOjJP/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQACAgEEAQQCAwEAAAAAAAAAAQIRAxIhMUEEBRMiURQyYZHRof/aAAwDAQACEQMRAD8Au9CEIAQhCAEIWNWoGgucYABJPIBAZJHV2nSbq8SNYvHsohtPbzsQ7KwltLTiC7qenRLtmuaBHReVn9SUZ6IL+yyjasfmbXokxnAPUEfUJaxwNxcdFDsfWawFxIDQJJ0AH3wTLsjfNrXgMY8NJg+GWTNpi4txWOD1PK5PXDb7RLj9Fmqrt/8AeOozEVKdKoQKPcg5SRBeHuJP+gKeYjb1JlE1ibAfDbMTwaBzJ9FVWwd1cVtDFVsU6saNN9Qmo9p8RJEd3Tm0NblGY8tCdPRyOOaOmL53Ijs7LK3N2w/E0Aaoh7QJMRmB0d6wfZSBN+xtkU8MzJTzXu5z3F73nm5x1+g5JwW2KLjFKTshvcEIQtCAQhCAEIQgBCEIAQhCAEIQgBCFE9nb+4WriKmHh7SxxAc4DK/KcriIOgNvnoqymo8glih+/wDtFwFPDs1qS53+Fp49Jv6KXBwIkHVUn2vYwnaHdZiGCh