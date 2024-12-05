
const submitBtn = document.querySelector('.submit-btn');
const cardWrapper = document.querySelector('.card-wrapper');
const ratingInputs = document.querySelectorAll('input[type="radio"][name="rating"]');

submitBtn.addEventListener('click',(e)=>{
    const valueSpan = document.getElementById('value-span')    
    ratingInputs.forEach(inp=>{
        if(!inp.checked){
            e.preventDefault();
        }else{
            valueSpan.innerText = inp.value
            cardWrapper.classList.add('rating-done')    
        }
    })
})