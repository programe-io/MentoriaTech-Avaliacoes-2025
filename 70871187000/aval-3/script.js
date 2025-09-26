// script para tornar o "vídeo" flutuante arrastável
(() => {
  const el = document.getElementById('floatingVideo');
    let dragging = false;
      let offset = {x:0, y:0};

        el.addEventListener('pointerdown', e => {
            dragging = true;
                el.setPointerCapture(e.pointerId);
                    const rect = el.getBoundingClientRect();
                        offset.x = e.clientX - rect.left;
                            offset.y = e.clientY - rect.top;
                              });

                                window.addEventListener('pointermove', e => {
                                    if (!dragging) return;
                                        const x = e.clientX - offset.x;
                                            const y = e.clientY - offset.y;
                                                // limita dentro da viewport
                                                    const maxX = window.innerWidth - rectWidth();
                                                        const maxY = window.innerHeight - rectHeight();
                                                            el.style.left = `${Math.max(8, Math.min(maxX, x))}px`;
                                                                el.style.top  = `${Math.max(8, Math.min(maxY, y))}px`;
                                                                    // remove as âncoras right/bottom para permitir left/top
                                                                        el.style.right = 'auto';
                                                                            el.style.bottom = 'auto';
                                                                              });

                                                                                window.addEventListener('pointerup', e => {
                                                                                    if (!dragging) return;
                                                                                        dragging = false;
                                                                                            try { el.releasePointerCapture(e.pointerId); } catch {}
                                                                                              });

                                                                                                function rectWidth(){ return el.getBoundingClientRect().width; }
                                                                                                  function rectHeight(){ return el.getBoundingClientRect().height; }
                                                                                                  })();