/* =====================================
   導覽列點擊效果
===================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =====================================
   捲動時自動切換導覽列顏色
===================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 130;

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        const correspondingLink =
            document.querySelector(
                `.navbar a[href="#${sectionId}"]`
            );

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =====================================
   櫻花飄落效果
===================================== */

const sakuraContainer =
    document.getElementById(
        "sakura-container"
    );


function createSakura() {

    if (!sakuraContainer) {
        return;
    }

    const sakura =
        document.createElement("span");

    sakura.classList.add("sakura");


    /* 隨機大小 */

    const size =
        Math.random() * 10 + 8;


    /* 隨機水平位置 */

    const startPosition =
        Math.random() *
        window.innerWidth;


    /* 隨機掉落時間 */

    const fallDuration =
        Math.random() * 6 + 8;


    /* 隨機左右擺動時間 */

    const swayDuration =
        Math.random() * 2 + 2;


    /* 隨機透明度 */

    const opacity =
        Math.random() * 0.35 + 0.55;


    /* 隨機延遲 */

    const delay =
        Math.random() * 1.5;


    sakura.style.left =
        `${startPosition}px`;

    sakura.style.width =
        `${size}px`;

    sakura.style.height =
        `${size * 0.72}px`;

    sakura.style.opacity =
        opacity;

    sakura.style.animationDuration =
        `${fallDuration}s, ${swayDuration}s`;

    sakura.style.animationDelay =
        `${delay}s, 0s`;


    /* 隨機改變櫻花方向 */

    if (Math.random() > 0.5) {

        sakura.style.borderRadius =
            "15% 80% 15% 80%";

    }


    sakuraContainer.appendChild(
        sakura
    );


    /* 掉落完成後刪除 */

    setTimeout(() => {

        sakura.remove();

    }, (fallDuration + delay) * 1000);

}


/* 每隔一段時間產生一片櫻花 */

const sakuraInterval =
    setInterval(
        createSakura,
        320
    );


/* 網頁剛開啟時先產生一些櫻花 */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createSakura,
        i * 120
    );

}