const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = '11e287823ec88ddc7a950af205a8c2c6'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}