fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json
    const todoTitles = completed.map( todo => {
      return {
        title: todo.title
      }
    });
    console.log(todoTitles);
  })
  .catch(function (err) {
    console.log(err);
  });