function search() {
    // window.location.href = '/pages/published.html';

    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card-title');
    let y = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            y[i].style.display = 'none';
        }
        else {
            x[i].style.display="card"; 
            y[i].style.display = 'card';                
        }
    }
}