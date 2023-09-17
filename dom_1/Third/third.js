var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// Select the parent element where you want to add the input field
var mainContainer = document.getElementById('main');

// Create a new input element
var inputElement = document.createElement('input');

// Set the attributes for the input element (class and ID)
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control mr-2');
inputElement.setAttribute('id', 'description');

// Append the input element to the form (or any desired parent element)
var addForm = mainContainer.querySelector('#addForm');
addForm.appendChild(inputElement);

// Append the input element after the existing item input
addForm.insertBefore(inputElement, addForm.childNodes[0]);

// Adjust the order of the existing elements
addForm.insertBefore(addForm.childNodes[2], inputElement.nextSibling);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItemName = document.getElementById('item').value;
  var newItemDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Create and append item name
  var itemNameNode = document.createElement('div');
  itemNameNode.appendChild(document.createTextNode(newItemName));
  li.appendChild(itemNameNode);

  // Create and append item description
  var descriptionNode = document.createElement('div');
  descriptionNode.appendChild(document.createTextNode(newItemDescription));
  li.appendChild(descriptionNode);


  // Create del button element
  var deleteBtn = document.createElement('button');


  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Create edit button element
  var editBtn = document.createElement('button');

  editBtn.className = 'btn btn-primary btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('EDIT'));

  // Append edit to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

 // Clear input fields after adding item
 document.getElementById('item').value = '';
 document.getElementById('description').value = '';










}




// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.childNodes[0].textContent.toLowerCase();
    var itemDescription = item.childNodes[1].textContent.toLowerCase();
    if(itemName.includes(text) || itemDescription.includes(text)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}