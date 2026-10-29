function toggleMenu(){document.querySelector('nav')?.classList.toggle('open')}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav')?.classList.remove('open')));
function chooseProduct(name){try{sessionStorage.setItem('kishProduct',name)}catch(e){};location.href='pemesanan.html?product='+encodeURIComponent(name)}
const productSelect=document.getElementById('productSelect');
if(productSelect){let selected=new URLSearchParams(location.search).get('product');try{selected=selected||sessionStorage.getItem('kishProduct')}catch(e){}if(selected){if(![...productSelect.options].some(o=>o.value===selected))productSelect.add(new Option(selected,selected));productSelect.value=selected;try{sessionStorage.removeItem('kishProduct')}catch(e){}}}
const orderForm=document.getElementById('orderForm');
if(orderForm)orderForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('customerName').value.trim();const product=productSelect.value;const qty=document.getElementById('quantity').value;document.getElementById('order-message').textContent=`Terima kasih, ${name}! Ini demo saja: ${qty} × ${product}. Pesanan belum dikirim ke server.`});
