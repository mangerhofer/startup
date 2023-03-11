function search() {
    // location.href = '/pages/published.html';

    let input = document.getElementById('searchbar').value
    // let anotherPageInput = document.getElementById('published-iframe').contentWindow.document.getElementById('searchbar').value;
    input=input.toLowerCase();
    // anotherPageInput = anotherPageInput.toLowerCase();
    let x = document.getElementsByClassName('card-title');
    let y = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {    // || !x[i].innerHTML.toLowerCase().includes(anotherPageInput)
            x[i].style.display="none";
            y[i].style.display = 'none';
        }
        else {
            x[i].style.display="card"; 
            y[i].style.display = 'card';                
        }
    }

    // findWork(input)
    // .then((input) => showResults(input))
    // .catch((input) => {
    //   workDNE(input);
    // });

    // function findWork() {
    //     return new Promise((resolve, reject) => {
    //         for (i = 0; i < x.length; i++) {
    //             if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //                 // x[i].style.display = 'none';
    //                 // y[i].style.display = 'none';
    //                 reject(input);
    //             }
    //             else {
    //                 // x[i].style.display = 'card';
    //                 // y[i].style.display = 'card';
    //                 resolve(input);
    //             }
    //         }
        
    //     });
    // }

    // function workDNE(input) {
    //     input.element.innerHTML = `<span> [${input.id}] <b class='failure'>Cannot Find Work</b>! ${input.error}</span>`;
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = 'none';
    //         y[i].style.display = 'none';
    //     }
    // }

    // function showResults(input) {
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = 'card';
    //         y[i].style.display = 'card';
    //     }
    // }

    // async function searchAllWorks() {
    //     try {
    //         await findWork(input);
    //         showResults(input);
    //       } catch (input) {
    //         orderFailure(input);
    //       }
    //     location.href = '/pages/published.html';
    // }

}
