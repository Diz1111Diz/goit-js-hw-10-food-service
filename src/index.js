import './styles.css';
import menu from "./menu.json";
import menuItems from "./templates/menu-item.hbs";

const menuList = document.querySelector('.js-menu');
const checkBox = document.querySelector('.js-switch-input');
const body = document.querySelector('body');


const markup = menu.map(el => menuItems(el)).join('');
menuList.insertAdjacentHTML("beforeend", markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const globalTheme = localStorage.getItem('theme');

if (globalTheme === Theme.DARK) {
    checkBox.checked = true;
    body.classList.add(Theme.DARK)
} else {
    checkBox.checked = false;
    body.classList.add(Theme.LIGHT)
};

checkBox.addEventListener("change", addClassThem);

function addClassThem(e) {
    if (e.target.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}