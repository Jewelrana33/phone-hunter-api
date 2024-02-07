const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhones(data.data);
}


// loadPhone();


const displayPhones = phones =>{
    
    const phoneContainer = document.getElementById('phone-container');

    // clear phone Container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllButton = document.getElementById('show-all-button');

    if(phones.length > 12){
      showAllButton.classList.remove('hidden');
    }
    else{
      showAllButton.classList.add('hidden');
    }

  // Display only first 12 phones
    phones = phones.slice(0,5);

    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl p-8`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="phone" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`
      phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner 
    toggleLoadingSpinner(false);
}

// handle search button
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
  
}
