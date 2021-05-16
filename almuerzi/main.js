window.onload = () => {
    fetch('http://localhost:3000/api/meals')
        .then(res => res.json())
        .then(data => console.log(data));
}
