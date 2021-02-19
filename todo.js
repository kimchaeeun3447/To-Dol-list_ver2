const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);

/*엔터누르면 추가*/
input.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) : null)
})

function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn); /*이걸해줘야 새로입력한것에도 버튼붙음*/
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none'; /*완료되면 체크버튼삭제*/
    }); /*여기 ; 붙어야하는 이유는 ?! 이것자체가 함수이름이여서?몰라!*/

    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });
}