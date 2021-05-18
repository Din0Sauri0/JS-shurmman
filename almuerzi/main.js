const stringToHTML = (s) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html')
    return doc.body.firstChild;
}

const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`);

    element.addEventListener('click', () => {

        const mealsList = document.getElementById('meals-list');
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'));
        element.classList.add('selected');
        const mealsIdInput = document.getElementById('meals-id');
        mealsIdInput.value = item._id;
    });

    return element;
}

window.onload = () => {
    const orderForm = document.getElementById('order');
    orderForm.onsubmit = (e) => {
        e.preventDefault();
        const mealId = document.getElementById('meals-id');
        const mealsIdValue = mealId.value;
        if (!mealsIdValue) {
            alert('Debe seleccionar un plato');
            return;
        }

        const order = {
            meal_id: mealsIdValue,
            user_id: 'Chanchito triste',
        }

        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        }).then(x => console.log(x));
    }
    fetch('http://localhost:3000/api/meals')
        .then(Response => Response.json())
        .then(data => {
            const mealsList = document.getElementById('meals-list');
            const submit = document.getElementById('submit');
            const listItems = data.map(renderItem);
            mealsList.removeChild(mealsList.firstElementChild);
            listItems.forEach(element => mealsList.appendChild(element))
            submit.removeAttribute('disabled');

            fetch('http://localhost:3000/api/orders')
                .then(response => response.json())
                .then(ordersData => {
                    console.log(ordersData);
                })
        });


}
