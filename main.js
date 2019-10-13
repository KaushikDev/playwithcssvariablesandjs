

const selectedControls = document.querySelectorAll('.controls input');

selectedControls.forEach( item =>{
    item.addEventListener('change', updateControl);
    item.addEventListener('mousemove', updateControl);
});

function updateControl(){
    const suffix = this.dataset.unit || '';
    
    document.documentElement.style.setProperty(`--${this.id}`, this.value+suffix);
}