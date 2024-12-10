// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in Javascript and
//         used got interacting with APIs to retriwvw and send
//         data asynchronously over the web.
//         fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data.id))

  .catch((error) => console.error(error));

//https://www.youtube.com/watch?v=37vxWr0WgQk
