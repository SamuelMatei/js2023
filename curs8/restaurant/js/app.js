// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {

}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map(function (category, index) {
        let btn_nr = 'btn' + (index + 1);
        const categoryRo = {
            all: 'Tot',
            breakfast: 'Mic dejun',
            lunch: 'Pranz',
            dinner: 'Cina',
            shakes: 'Bauturi',
        }
        return `<button type="button" class="filter-btn"data-is=${category} . data-nr=${btn_nr}>
        ${categoryRo[category]}
        </button>`;
    })
        .join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            // counterClick(e.currentTarget);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {

            return `<article class="menu-item">
                <img src=${item.img}alt=${item.title} class="photo" />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">
                  ${item.desc}
               
                  </p>
                </div>
              </article>`
        })
    }

}