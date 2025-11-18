.particles {
  position: absolute;
  pointer-events: none;
  z-index: 9999;
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: particleAnimation 0.5s ease-out;
}

@keyframes particleAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
