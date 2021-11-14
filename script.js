function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function find_recipe(categories){
  var food = $.csv.toObjects(csv);
  var newfood = food
  for (let i = 0; i < categories.length; i++) {
    newfood = newfood.loc[newfood[i] > 0]
  return (newfood['title'])
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('preference'));
});