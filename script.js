const items = ['JavaScript Practice', 'Go to the supermarket', 'Take care of plants', 'Go running'];
const id = ['tarea-1', 'tarea-2', 'tarea-3', 'tarea-4'];

const checkbox = document.getElementById('main-checkbox');

const itemsList = document.createElement('ul');
checkbox.appendChild(itemsList);

for (let index = 0; index < items.length; index++){
  const checkboxId = id[index];
  const checkboxItems = document.createElement('li');
  itemsList.appendChild(checkboxItems);

  const inputCheckbox = document.createElement('input');
  checkboxItems.appendChild(inputCheckbox);
  inputCheckbox.setAttribute('id', checkboxId);

  inputCheckbox.setAttribute('type', "checkbox");
  
  const labelCheckbox = document.createElement('label', checkboxId);
  checkboxItems.appendChild(labelCheckbox);
  
  labelCheckbox.setAttribute('for', checkboxId);

  labelCheckbox.innerHTML = items[index];
}