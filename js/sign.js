const $ = document;
const canvasElm = $.getElementById("signCanvas");
const deleteBtnElm = $.getElementById("deleteBtn");
const saveBtnElm = $.getElementById("saveBtn");

const context = canvasElm.getContext('2d');

canvasElm.style.width ="100%";
canvasElm.style.height = "500px";

let isDraw = false;

canvasElm.addEventListener('mousedown', () => {
    isDraw = true;
});

canvasElm.addEventListener('mouseup',()=>{
    isDraw=false;
    context.beginPath();
});

canvasElm.addEventListener('mousemove',(e)=>{
    if(!isDraw) return;

    context.linWidth=2;
    context.lineCap='round';
    context.strokeStyle='green';

    context.lineTo(e.clientX-canvasElm.offsetLeft,e.clientY-canvasElm.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX-canvasElm.offsetLeft,e.clientY-canvasElm.offsetTop)

});

deleteBtnElm.addEventListener('click',()=>{
    context.clearRect(0,0,canvasElm.width,canvasElm.height);
});

saveBtnElm.addEventListener('click',()=>{
    isDraw=false;
    const dataUrl=canvasElm.toDataURL('image/png');
    const link=$.createElement('a');
    link.href=dataUrl;
    link.download='signiture.png';
    link.click();

})