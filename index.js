// SOLUTION FOR SHOPPING LIST APP/WEBSITE

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form  = document.getElementById("form");
    const list = document.getElementById("list") // where items will be shown;

    form.addEventListener("submit",  (event) => {
        event.preventDefault(); // prevents form submission by itself.
        const addButton = document.getElementById("add");   //adds items to list when clicked  
        const clearButton = document.getElementById("clear"); //clears all the listed items
        
         // assigned the session storage to a variable to store it nd name of it as ListedItems  for reference
        let arrayList = JSON.parse(sessionStorage.getItem('ListedItems')) || [];

      /// adds/appends items lists elements buttons to main list
      addButton.addEventListener('click', (e) => {
        e.preventDefault();// prevents form submission
        const  itemName = document.getElementById('item').value.trim().toUpperCase();
        const price = document.getElementById("price").value.trim();

        // checks whether  the input fields are empty and alerts
        if (!itemName || !price) {
          alert (`Enter Name of the item and the Price`);
          return;
        }

          const li = document.createElement('li');// creates a li a li element to hold the buttons and input values
          //sets the display of of to be inputs values i.e item name and price;
          li.innerHTML = `${itemName}
                            <br>
                            ksh ${price}
                            `;
          li.classList.add("listStyle");

          const deleteButton = document.createElement('button')//creates a button
          deleteButton.textContent = `X`;//assigns  text content
          deleteButton.classList.add('deleteBtn');// ads a class 

          const markedBtn = document.createElement('button');// creating a button
          markedBtn.textContent =` Mark purchased`;// sets its text 
          markedBtn.classList.add(`markedBtn`) // adds class to the button created
          //appending deleteBtn ,markedBtn to li and then appending li to list;
          li.appendChild(deleteButton);
          li.appendChild(markedBtn)
          list.appendChild(li);
          
          // pushes newItem and Price for them to end of the array and after session is updated;
          arrayList.push({ itemName, price }); // whatever you write in your inputs becomes the value for the item and price and are appended at the end of arrayList
          sessionStorage.setItem('ListedItems', JSON.stringify(arrayList));

          markedBtn.addEventListener('click', () => {
            li.classList.toggle("line-through");
            
          });
          //deletes a li from the main list and updates sessionStorage 
          deleteButton.addEventListener("click", () => {
              li.remove();
              sessionStorage.setItem('ListedItems', JSON.stringify(arrayList));
          });
          //sets all input to nothing after add is clicked
        document.getElementById('item').value = ''; 
        document.getElementById('price').value = '';
      })

      clearButton.addEventListener("click", () => {
          // replaces list childrens to nothing if the exist
          if(list.firstChild){
            return list.replaceChildren()
          }
        
        // session storage is cleared and arrayList is reset
        arrayList = [];
        sessionStorage.setItem("ListedItems", JSON.stringify(arrayList));
      });

    })   
  
})      
