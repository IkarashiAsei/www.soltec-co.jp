document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menu-icon")
    var menuSp = document.querySelector(".menu-sp")

    // メニューアイコンをクリックしたときの処理
    menuIcon.addEventListener("click", function () {
        // メニューアイコンの active クラスをトグルする
        this.classList.toggle("active")

        // menu-spの表示状態を切り替える
        menuSp.classList.toggle("active")
    })

    const boxes = document.querySelectorAll(".anime")
    const boxOptions = {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
    }
    const boxObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("anime-show")
                observer.unobserve(entry.target)
            }
        })
    }, boxOptions)
    boxes.forEach((box) => {
        boxObserver.observe(box)
    })
})
