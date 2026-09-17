$(function() {

    let TodoList = [];

    function createTodo(text) {
        return $('<div>')
            .addClass('todo')
            .append($('<p>').text(text))
            .append(
                $('<button>')
                    .text('Delete')
                    .attr('data-text', text)
            );
    }

    function render() {
        const $list = $('#ft_list');
        $list.empty();

        for (let index = 0; index < TodoList.length; index++) {
            $list.append(createTodo(TodoList[index]));
        }

        document.cookie = JSON.stringify(TodoList);
    }

    function newTodo() {
        let name = prompt("Name the todo.");
        if (name && name.length > 0) {
            TodoList.unshift(name);
            render();
        }
    }

    function remove(text) {
        let yes = confirm('Are you sure to remove.');
        if (yes) {
            TodoList = TodoList.filter((a) => a != text);
            render();
        }
    }

    // Event delegation: ปุ่ม Delete ถูกสร้างทีหลัง (dynamic) ต้อง bind ผ่าน parent ที่มีอยู่ตั้งแต่แรก
    $('#ft_list').on('click', 'button', function() {
        remove($(this).attr('data-text'));
    });

    $('#newTodoBtn').on('click', newTodo);

    // โหลด cookie ตอนหน้าเว็บพร้อม
    let save = document.cookie;
    if (save.length > 0) {
        TodoList = JSON.parse(save);
        render();
    }

});