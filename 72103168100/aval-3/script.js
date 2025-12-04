// script.js
// Interatividade para o feed: curtir (localStorage), salvar, modal de imagem e duplo-clique para curtir.

(function () {
  const LS_KEY = "feed_state_v1";

  // ----- helpers -----
  const q = (s, ctx = document) => ctx.querySelector(s);
  const qAll = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const saveState = (state) => localStorage.setItem(LS_KEY, JSON.stringify(state));
  const loadState = () => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); }
    catch { return {}; }
  };
  const formatCount = (n) => (n > 999 ? (n / 1000).toFixed(1) + "k" : String(n));

  // ----- create modal once -----
  function createModal() {
    const modal = document.createElement("div");
    modal.id = "feed-modal";
    Object.assign(modal.style, {
      position: "fixed",
      inset: 0,
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.75)",
      zIndex: 9999,
      padding: "20px"
    });

    const inner = document.createElement("div");
    Object.assign(inner.style, {
      maxWidth: "95%",
      maxHeight: "95%",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.6)"
    });

    const img = document.createElement("img");
    img.alt = "imagem ampliada";
    Object.assign(img.style, {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      background: "#111"
    });

    inner.appendChild(img);
    modal.appendChild(inner);
    document.body.appendChild(modal);

    // close on click outside or ESC
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.style.display = "none";
    });

    return { modal, img };
  }

  // ----- setup -----
  const state = loadState(); // { likes: {id:true}, saves: {id:true}, likesCount: {id: 12} }
  state.likes = state.likes || {};
  state.saves = state.saves || {};
  state.likesCount = state.likesCount || {};

  const { modal, img: modalImg } = createModal();

  // Add controls to each card
  function enhanceCards() {
    const cards = qAll(".card");
    cards.forEach((card, index) => {
      // ensure a stable id for each card element
      if (!card.dataset.postId) card.dataset.postId = `post-${index + 1}`;

      const id = card.dataset.postId;

      // find or create controls container
      let controls = q(".card-controls", card);
      if (!controls) {
        controls = document.createElement("div");
        controls.className = "card-controls";
        Object.assign(controls.style, {
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "8px"
        });
        card.appendChild(controls);
      } else {
        controls.innerHTML = "";
      }

      // left side: btns
      const left = document.createElement("div");
      left.style.display = "flex";
      left.style.gap = "8px";
      left.style.alignItems = "center";

      // like button
      const likeBtn = document.createElement("button");
      likeBtn.type = "button";
      likeBtn.className = "btn-like";
      likeBtn.setAttribute("aria-pressed", !!state.likes[id]);
      Object.assign(likeBtn.style, {
        padding: "6px 10px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: 600
      });
      likeBtn.innerText = state.likes[id] ? "❤️ Curtido" : "♡ Curtir";

      // like count display
      if (!state.likesCount[id]) state.likesCount[id] = Math.floor(10 + Math.random() * 40); // seed
      const likeCount = document.createElement("span");
      likeCount.className = "like-count";
      likeCount.innerText = formatCount(state.likesCount[id]);
      Object.assign(likeCount.style, { fontSize: "13px", color: "#ddd", marginLeft: "6px" });

      likeBtn.addEventListener("click", () => {
        const liked = !state.likes[id];
        state.likes[id] = liked;
        likeBtn.innerText = liked ? "❤️ Curtido" : "♡ Curtir";
        likeBtn.setAttribute("aria-pressed", liked);
        state.likesCount[id] += liked ? 1 : -1;
        likeCount.innerText = formatCount(Math.max(0, state.likesCount[id]));
        saveState(state);
      });

      left.appendChild(likeBtn);
      left.appendChild(likeCount);

      // save button
      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "btn-save";
      saveBtn.innerText = state.saves[id] ? "🔖 Salvo" : "🔖 Salvar";
      Object.assign(saveBtn.style, {
        padding: "6px 10px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: 600
      });
      saveBtn.addEventListener("click", () => {
        state.saves[id] = !state.saves[id];
        saveBtn.innerText = state.saves[id] ? "🔖 Salvo" : "🔖 Salvar";
        saveState(state);
      });

      left.appendChild(saveBtn);

      // right side: timestamp or share placeholder
      const right = document.createElement("div");
      right.style.display = "flex";
      right.style.gap = "8px";
      right.style.alignItems = "center";

      // optional: share button
      const shareBtn = document.createElement("button");
      shareBtn.type = "button";
      shareBtn.className = "btn-share";
      shareBtn.innerText = "↗ Compartilhar";
      Object.assign(shareBtn.style, {
        padding: "6px 10px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: 600
      });
      shareBtn.addEventListener("click", () => {
        // simple share: copy post URL (if exists) or text
        const postText = q(".descricao", card)?.innerText || "Post do feed";
        navigator.clipboard?.writeText(postText).then(() => {
          shareBtn.innerText = "✔ Copiado";
          setTimeout(() => (shareBtn.innerText = "↗ Compartilhar"), 1500);
        }).catch(() => {
          shareBtn.innerText = "✖ Falha";
          setTimeout(() => (shareBtn.innerText = "↗ Compartilhar"), 1500);
        });
      });

      // show existing time label if present
      const timeLabel = q(".tempo", card);
      const rightContainer = document.createElement("div");
      if (timeLabel) {
        rightContainer.innerText = timeLabel.innerText;
        Object.assign(rightContainer.style, { color: "#cfcfcf", fontSize: "13px" });
      }

      right.appendChild(shareBtn);
      if (timeLabel) right.appendChild(rightContainer);

      controls.appendChild(left);
      controls.appendChild(right);

      // image modal & double click to like
      const postImg = q(".post-img", card);
      if (postImg) {
        // open modal on click
        postImg.style.cursor = "zoom-in";
        postImg.addEventListener("click", () => {
          modalImg.src = postImg.src;
          modal.style.display = "flex";
        });

        // double-click to like (and small heart feedback)
        let lastTap = 0;
        postImg.addEventListener("dblclick", () => {
          // simulate like button click
          likeBtn.click();

          // heart animation
          const heart = document.createElement("div");
          heart.innerText = "❤️";
          Object.assign(heart.style, {
            position: "absolute",
            fontSize: "48px",
            pointerEvents: "none",
            transform: "translate(-50%,-50%)",
            transition: "opacity 700ms ease-out, transform 700ms ease-out",
            opacity: 1
          });

          // position relative parent
          card.style.position = "relative";
          const rect = postImg.getBoundingClientRect();
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          heart.style.left = (postImg.offsetLeft + cx) + "px";
          heart.style.top = (postImg.offsetTop + cy) + "px";
          card.appendChild(heart);

          requestAnimationFrame(() => {
            heart.style.opacity = 0;
            heart.style.transform = "translate(-50%,-120%) scale(1.8)";
          });
          setTimeout(() => heart.remove(), 800);
        });
      }

    }); // end cards.forEach
  }

  // run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceCards);
  } else {
    enhanceCards();
  }

  // Expose a small helper to reset state (useful during dev)
  window.__feedHelpers = {
    resetState: () => { localStorage.removeItem(LS_KEY); location.reload(); },
    getState: () => JSON.parse(localStorage.getItem(LS_KEY) || "{}")
  };
})();
