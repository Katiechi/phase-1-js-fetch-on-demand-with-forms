const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
       const input = event.target.children[1].value;
       console.log(input)

    return fetch(`http://localhost:3000/movies`)
    .then(response => response.json()
    )
    .then(data =>{
      for(let obj of data){
          if(input == obj['id']){
              console.log(input)
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

        title.innerText = obj.title;
        summary.innerText = obj.summary; 
          }
          
      }
    })
})
}

document.addEventListener('DOMContentLoaded', init);