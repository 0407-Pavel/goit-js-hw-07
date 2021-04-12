const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsRef = document.querySelector("#ingredients");
  console.log(ingredientsRef);
  const elements = ingredients.map((ingredient) => {
    const liRef = document.createElement("li");
    liRef.textContent = ingredient;
    return liRef;
  });
  ingredientsRef.append(...elements);

  
  
  
  
  
  
  
  
  
//   for (let i = 0, ln = ingredients.length; i < ln; i += 1){
//   let ul = document.getElementById('ingredients')
//   let li = document.createElement('li')
//   console.log(ul)
//   li.innerHTML = ingredients[i];
//   ul.appendChild(li);
// }










// const ing1 = document.createElement('li')
// ing1.textContent = 'Картошка' 
// console.log(ing1)
// const ing2 = document.createElement('li')
// ing2.textContent = 'Грибы' 
// console.log(ing2)
// const ing3 = document.createElement('li')
// ing3.textContent = 'Чеснок' 
// console.log(ing3)
// const ing4 = document.createElement('li')
// ing4.textContent = 'Помидоры' 
// console.log(ing4)
// const ing5 = document.createElement('li')
// ing5.textContent = 'Зелень' 
// console.log(ing5)
// const ing6 = document.createElement('li')
// ing6.textContent = 'Приправы' 
// console.log(ing6)










