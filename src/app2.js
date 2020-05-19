import './app2.css'
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const x = localStorage.getItem('x') || 0
$tabBar.on("click", "li", e => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    const index = $li.index();
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    localStorage.setItem("x", index);
});

$tabBar.children().eq(x).trigger('click')