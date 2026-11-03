document.getElementById("demo").innerHTML = add();
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();  
  return counter; 
}
