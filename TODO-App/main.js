const todoArr = [];

const renderTitle = (title) => {
    return(
        '<h2>'+title+'</h2>'
    );
}
const renderContent = (content) => {
    return(
        '<p>'+content+'</p>'
    );
}
const render = () => {
    const todoList = document.getElementById('todoList');
    const template = todoArr.map((t) => {
        return(
            '<div class="todo-card"><div class="todo-header">'+renderTitle(t.title)+'<button id="detele" class="trash icon-btn"><i class="fas fa-trash"></i></button><button id="edit" class="edit icon-btn"><i class="fas fa-pen"></i></button></div><p>'+renderContent(t.content)+'</div>'
        );
    })
    todoList.innerHTML = template.join('');
    const elemento = document.querySelectorAll('#todo-card button');
    console.log(elemento);
}

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById('title');
        const content = document.getElementById('content');
        const titleText = title.value;
        const contentText = content.value;
        title.value = '';
        content.value = '';
        const todo = {
            title: titleText,
            content: contentText
        };
        todoArr.push(todo);
        render();
        
    }
}