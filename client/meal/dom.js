/* eslint-disable require-jsdoc */
/* eslint-disable indent */
const list = document.querySelector('.data');

fetch('/allmeals')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.rows);
       createItems(Object.values(data.rows));
    })
    .catch((error) => {
        console.error(error);
    });

function createItems(data) {
    data.forEach((ele) => {
        console.log(ele.mealname);
        const meal = document.createElement('div');
        meal.classList = 'mealInfo';
        const name = document.createElement('h3');
        const figure = document.createElement('img');
        list.appendChild(meal);
        meal.appendChild(name);
        meal.appendChild(figure);
        figure.src = 'https://www.annisarestaurant.com/wp-content/uploads/2022/08/how-long-is-pizza-good-for-in-the-fridge-1.jpg';
        name.textContent = ele.mealname;
        const viewBtn = document.createElement('button');
        viewBtn.addEventListener('click', () => {
            fetch(`/CustomerByMeal:${ele.mealname}`)
                .then((res) => res.json())
                .then((data) => {
                    showorders(data.rows);
                })
                .catch((err) => {
                    console.error(err);
                });
        });
        viewBtn.textContent = 'view customers';
        meal.appendChild(viewBtn);
    });
};

function showorders(names) {
    const list2 = document.querySelector('.mealInfo');
    if (list2.lastChild.nodeName != 'BUTTON')
        list2.removeChild(list2.lastChild);
    const order = document.createElement('div');
    list2.appendChild(order);
    names.forEach((ele) => {
        console.log(ele.fullname);
        mName = document.createElement('h4');
        order.appendChild(mName);
        mName.textContent = ele.fullname;
    });
};