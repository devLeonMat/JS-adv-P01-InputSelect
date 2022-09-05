const selectedOption = document.querySelector('.select-option');
const selectValue = document.querySelector('.select-value');
const optionContainer = document.querySelector('.options');
const optionList = document.querySelectorAll('.option');

/***toggle functions **/

const selectToggle = () =>{
    optionContainer.dataset.toggle = optionContainer.dataset.toggle === 'collapsed' ? '' : 'collapsed';
}

// when click on selected
selectedOption.addEventListener('click', selectToggle)

/** update function to update value **/
const updateSelectValue = (option)=>{
    selectValue.innerText = option.innerText;
}

optionList.forEach((option)=>{
    option.addEventListener('click', (e)=>{
        updateSelectValue(option);
        selectToggle();
    })
})
