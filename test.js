document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".snowflakes");

    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        container.appendChild(snowflake);

        animateSnowflake(snowflake);
    }
});

function animateSnowflake(snowflake) {
    const speed = Math.random() * 5 + 1;
    const delay = Math.random();
    const rotate = Math.random() * 360;
    const startX = Math.random() * window.innerWidth;
    const endX = Math.random() * window.innerWidth;

    snowflake.style.left = startX + "px";
    snowflake.style.animation = `fall ${speed}s linear ${delay}s infinite`;
    snowflake.style.transform = `rotate(${rotate}deg)`;

    snowflake.addEventListener("animationiteration", function () {
        snowflake.style.left = startX + "px";
        snowflake.style.animation = `fall ${speed}s linear ${delay}s infinite`;
    });
}

setTimeout(() => {
    var ongGiaVaTuanLocToStartElement = document.querySelector('.ongGiaVaTuanLoc2');

    // Thêm class vào element
    ongGiaVaTuanLocToStartElement.classList.add('ongGiaVaTuanLocToStart');
}, 6000)

const giftDrop = (className, time) => {
    setTimeout(() => {
        var giftElement = document.querySelector('.wrap-gift');
        giftElement.classList.add(className);
    }, time)
}
giftDrop('gift-drop', 9800)

setTimeout(() => {
    var background = document.querySelector('.wrap-background');
    background.style.backgroundImage = 'url(img/noelRoom.jpg)';
    //Xóa hiệu ứng tuyết rơi tại đây
    var elementToRemove = document.querySelector(".snowflakes");

    if (elementToRemove) {
        elementToRemove.remove();
    }
    giftDrop('gift-drop2', 0)
    var openGift = document.querySelector('.openGift');
    var boyName = document.querySelector('.boy-name');
    var girlName = document.querySelector('.girl-name');
    var boyName2 = document.querySelector('.boy-name2');
    var girlName2 = document.querySelector('.girl-name2');
    var merryChristmas = document.querySelector('.merry-christmas');
    setTimeout(() => {
        openGift.style.opacity = 1
        boyName.style.opacity = 1
        girlName.style.opacity = 1
        merryChristmas.style.opacity = 1

        function toggleOpacity() {
            boyName.style.opacity = boyName.style.opacity === "1" ? "0" : "1";
            girlName.style.opacity = girlName.style.opacity === "1" ? "0" : "1";
            boyName2.style.opacity = boyName2.style.opacity === "1" ? "0" : "1";
            girlName2.style.opacity = girlName2.style.opacity === "1" ? "0" : "1";

            // Đệ quy để lặp lại sau mỗi 3 giây
            setTimeout(toggleOpacity, 3000);
        }

        toggleOpacity();
        const container = document.querySelector(".wrap-light");

        for (let i = 0; i < 30; i++) {
            const light = document.createElement("div");
            light.classList.add("light");
            container.appendChild(light);
            animateLight(light);

        }

    }, 3000)


}, 9800 + 3000);



function animateLight(light) {
    const speed = Math.random() * 5 + 1;
    const delay = Math.random();
    const rotate = Math.random() * 360;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    light.style.left = startX + "px";
    light.style.top = startY + "px";
    light.style.animation = `light ${speed}s linear ${delay}s infinite`;
    light.style.transform = `rotate(${rotate}deg)`;

    light.addEventListener("animationiteration", function () {
        light.style.left = startX + "px";
        light.style.animation = `light ${speed}s linear ${delay}s infinite`;
    });
}

