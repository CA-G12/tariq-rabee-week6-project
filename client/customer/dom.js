/* eslint-disable require-jsdoc */
/* eslint-disable indent */
const list = document.querySelector('.data');

fetch('/allcustomers')
    .then((res) => res.json())
    .then((data) => {
        createItems(Object.values(data.rows));
    })
    .catch((error) => {
        console.error(error);
    });

function createItems(data) {
    data.forEach((ele) => {
        const custom = document.createElement('section');
        custom.classList = 'custName';
        const name = document.createElement('h3');
        name.textContent = ele.fullname;
        list.appendChild(custom);
        custom.appendChild(name);
        const viewBtn = document.createElement('button');
        viewBtn.addEventListener('click', (e) => {
            fetch(`/MealByCustomer:${ele.fullname}`)
                .then((res) => res.json())
                .then((data) => {
                    showorders(data.rows);
                })
                .catch((err) => {
                    console.error(err);
                });
        });
        viewBtn.textContent = 'view Orders';
        custom.appendChild(viewBtn);
    });
};
function showorders(orders) {
    const list2 = document.querySelector('.custName');
    if (list2.lastChild.nodeName != 'BUTTON')
        list2.removeChild(list2.lastChild);
    const order = document.createElement('div');
    list.appendChild(order);
    orders.forEach((ele) => {
        mName = document.createElement('h4');
        hr = document.createElement('hr')
        order.appendChild(mName);
        order.appendChild(hr)
        mName.textContent = ele.mealname;
    });
};
