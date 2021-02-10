fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))
const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries')
    countriesDiv.innerHTML = ''
    countries.forEach(country => {
        // const countryDiv = document.createElement('div')
        // countryDiv.className = "country"

        countriesDiv.innerHTML += `

        <div class="country" onclick="displayCountryDetail('${country.name}')">
        <h2  class="country-name">${country.name}</h2>
        <h3>${country.capital}</h3>
        </div>
        `
        // countriesDiv.appendChild(countryDiv)
        // countryDiv.innerHTML = countryInfo

    });
    
    

}
const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));


}
const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById("countryDetail")
    countryDiv.innerHTML= `
    <h1>${country.name}</h1>
    <h1>Main city:${country.capital}</h1>
    <h1>Region:${country.region}</h1>

    <h1>Population:${country.population}</h1>
    <h2>Area:${country.area}</h2>

    <img src="${country.flag}">
    
    `
}



// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=${a}')
// .then(res => res.json())
// .then(data =>displayMeals(data.meals) )
// const displayMeals = meals =>{
//     const mealsDiv = document.getElementById('meals')
//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div')
//         mealDiv.className = ('meal')
//         const mealInfo = `
//         <h2 class="country-name">${meal.strCategory}</h2>
//         <p></p>
//         `
        
        
//     });
// }


// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => displayCountries(data))

// const displayCountries = countries =>{
//     const countriesDiv = document.getElementById('countries')
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div')
//             countryDiv.className = ('country');
//             const countryInfo = `
//             <h2 class="country-name">${country.name}</h2>
//             <p>${country.capital}</p>
//             <p>${country.population}</p>
//             <p>$${country.area}</p>
//             <button onclick="displayCountryDetail('${country.name}')">Details</button>
//            `
//            countryDiv.innerHTML = countryInfo
//            countriesDiv.appendChild(countryDiv)
//      });

// }
// const displayCountryDetail = name =>{
//     const url = `https://restcountries.eu/rest/v2/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => renderCountryInfo(data[0]));

// }
// const renderCountryInfo = country =>{
//     console.log(country);
//     const countryDiv = document.getElementById('country-detail')
//     countryDiv.innerHTML = `
//     <h1>${country.name}</h1>
//     <h1>Area:${country.area}</>
//     <p>Population: ${country.population}</p>
//     <img src=${country.flag}>
//     `   
// }
























// const searchSong = () => {
//     const searchText = document.getElementById('search-field').value
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals));
// }
// const displayMeals = meals => {
//     const mealContainer = document.getElementById('meal-container')
//     meals.forEach(meal => {
//         const mealDiv = document.createElement('div')
//         mealDiv.className = "single-result row align-items-center my-3 p-3"
//         mealDiv.innerHTML = `<div class="col-md-9">
//      <h3 class="food-name">${meal.strMeal}</h3>
//      <p class="cook"><span>${meal.strMealThumb}</span></p>
//      </div>
//      <div class="col-md-3 text-md-right text-center">
//      <button onclick="getFood('${meal.strMeal}','${meal.strMealThumb}')" class="btn btn-success">Get Food</button>
//      </div>
//      `;
//         mealContainer.appendChild(mealDiv);
//     })

// }
// singleMeal.innerHTML = `
// <div class="single-meal">
// <img src"${meal.strMealThumb}" alt="${meal.strMeal}"/>
// <div class="main">
// <h1> Food Name: ${meal.strMeal} </h1>
// <h2 class="head"> Ingredients <h2>
// <ol>

// `
// const getFood = (foods,ingredients) =>{


// }
