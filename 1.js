const namesa = {
    st: 'Phước',
}
const namesb = {   
    nd: 'Nguyên',
}
localStorage.setItem('ng1', JSON.stringify(namesa));
localStorage.setItem('ng2', JSON.stringify(namesb));
const a = JSON.parse(window.localStorage.getItem('ng1'));
const b = JSON.parse(window.localStorage.getItem('namesb'));
var olala = localStorage.getItem('ng1');
olala = olala ? olala.split(',') : [];
olala.push("Hà")
localStorage.setItem('ng1', olala.toString());
localStorage.removeItem("ng1"); 
// localStorage.clear(); xóa toàn bộ


