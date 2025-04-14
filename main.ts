// 🎯 マウス追従エフェクト（背景のパララックス）
document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.body.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
  });
  
  // 🎯 スクロール時フェードイン
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hero h1, .hero p, .hero-img, .surreal-list li")
      .forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
      });
  });
  