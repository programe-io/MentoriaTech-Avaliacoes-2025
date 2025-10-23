/* Botão "voltar ao topo" com dança exagerada */
.top-btn {
    position: fixed;
    bottom: 30px;
    right: 20px;
    background-color: #b30000;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 12px 15px;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 1000;
}

/* Mostrar e ativar o botão */
.top-btn.show {
    opacity: 1;
    pointer-events: auto;
    animation: dance 1s infinite; /* animação de dança contínua */
}

/* Animação de dança divertida */
@keyframes dance {
    0%   { transform: translateY(0) rotate(0deg) scale(1); }
    10%  { transform: translateY(-10px) rotate(-15deg) scale(1.1); }
    20%  { transform: translateY(0) rotate(15deg) scale(1); }
    30%  { transform: translateY(-10px) rotate(-15deg) scale(1.1); }
    40%  { transform: translateY(0) rotate(15deg) scale(1); }
    50%  { transform: translateY(-15px) rotate(-20deg) scale(1.2); }
    60%  { transform: translateY(0) rotate(20deg) scale(1); }
    70%  { transform: translateY(-10px) rotate(-10deg) scale(1.1); }
    80%  { transform: translateY(0) rotate(10deg) scale(1); }
    90%  { transform: translateY(-5px) rotate(-5deg) scale(1.05); }
    100% { transform: translateY(0) rotate(0deg) scale(1); }
}

.top-btn:hover {
    background-color: #ff3333;
}
