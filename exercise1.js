fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((todo, index) => {
        
        return todo.completed === true
      });


     console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });