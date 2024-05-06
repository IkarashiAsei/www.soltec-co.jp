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
})
