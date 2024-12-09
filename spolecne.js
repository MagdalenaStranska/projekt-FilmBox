// 3
// 1.V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.
// 2.Přidejte mu posluchač události kliknutí.
// 3.Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.
// 4.Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

// const burgerMenu = document.querySelector('#menu-tlacitko');
// const menuShow = document.querySelector('#menu-polozky');

// burgerMenu.addEventListener('click', () => {
//     menuShow.classList.toggle('show');
// })

document.querySelector('#menu-tlacitko').addEventListener('click', () => {
const menuShow = document.querySelector('#menu-polozky').classList.toggle('show')
})

// Bonus
// Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

// HTML ikonky křížku: <i class="fas fa-xmark"></i>
// HTML ikonky hamburgeru: <i class="fas fa-bars"></i>

