// class addWork {

//     constructor() {
//         this.el = el;
        
//     }

//     async pressButton(button) {
//         if (this.allowAuthor) {
//             this.allowAuthor
//         }
//     }

//     // let n=4;//take grid column value as you want

//     // for(var i = 0; i < n; i++) {
//     //     document.body.innerHTML+='<div class="row">';

//     //     for(j = 0; j < n; j++) {
//     //         document.body.innerHTML+='<div class="gridsquare">' + (i*5+j+1) + '</div>';
//     //     }

//     //     document.body.innerHTML+='</div>';
//     // }
// }


// function loadStories() {
//     let stories = [];
//     const storyText = localStorage.getItem('story');

// }

// function genDivs(v){ 
//     let e = document.body; // whatever you want to append the rows to: 
//     for(var i = 0; i < v; i++){ 
//       var row = document.createElement("div"); 
//       row.className = "row"; 
//       for(var x = 1; x <= v; x++){ 
//           var cell = document.createElement("div"); 
//           cell.className = "gridsquare"; 
//           cell.innerText = (i * v) + x;
//           row.appendChild(cell); 
//       } 
//       e.appendChild(row); 
//     } 
//     document.getElementById("code").innerText = e.innerHTML;

//   }
//   {/* <input type="button" onclick="genDivs(6)" value="click me"> 
//   <code id="code"></code> */}