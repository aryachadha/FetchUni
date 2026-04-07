const searchInput = document.getElementById('search-input');
const countrySelect = document.getElementById('country-select');
const sortBtn = document.getElementById('sort-btn');
const universityList = document.getElementById('university-list');
const shortlistContainer = document.getElementById('shortlist');
const resultsCount = document.getElementById('results-count');
const loadingEl = document.getElementById('loading');


let universities = [];        
let filteredUniversities = [];
let shortlist = JSON.parse(localStorage.getItem('fetchUni_shortlist')) || []; 
let isSortedAsc = true;   


async function fetchUniversities() {
    try {
        loadingEl.style.display = 'block';
        universityList.innerHTML = ''; 

        const response = await fetch('http://universities.hipolabs.com/search');
        universities = await response.json();
        const uniqueCountries = [...new Set(universities.map(uni => uni.country))].sort();
        
        uniqueCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });

        filteredUniversities = [...universities]; 
        loadingEl.style.display = 'none';     
        
        renderUniversities();
        renderShortlist();

    } catch (error) {
        loadingEl.textContent = 'Failed to load data.';
        console.error('API Fetch Error:', error);
    }
}


function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCountry = countrySelect.value;

    filteredUniversities = universities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm);
        const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
        
        return matchesSearch && matchesCountry;
    });

    applySorting(); 
    renderUniversities();
}

function applySorting() {
    filteredUniversities.sort((a, b) => {
        if (a.name < b.name) return isSortedAsc ? -1 : 1;
        if (a.name > b.name) return isSortedAsc ? 1 : -1;
        return 0;
    });
}

sortBtn.addEventListener('click', () => {
    isSortedAsc = !isSortedAsc;
    sortBtn.textContent = isSortedAsc ? 'Sort A-Z ⬇️' : 'Sort Z-A ⬆️';
    applySorting();
    renderUniversities();
});

window.toggleShortlist = function(uniName) {
    const isSaved = shortlist.some(uni => uni.name === uniName);

    if (isSaved) {
        shortlist = shortlist.filter(uni => uni.name !== uniName);
    } else {
        const uniToAdd = universities.find(uni => uni.name === uniName);
        if (uniToAdd) {
            shortlist.push(uniToAdd);
        }
    }
    
    localStorage.setItem('fetchUni_shortlist', JSON.stringify(shortlist));
    renderUniversities(); 
    renderShortlist();
};

function renderUniversities() {
    universityList.innerHTML = '';
    
    const displayList = filteredUniversities.slice(0, 100);
    resultsCount.textContent = `(${filteredUniversities.length} found - showing top ${displayList.length})`;


    displayList.forEach(uni => {
        const isSaved = shortlist.some(item => item.name === uni.name);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <h3>${uni.name}</h3>
                <p>${uni.country}</p>
                <a href="${uni.web_pages[0]}" target="_blank">Website</a>
            </div>
            <button class="${isSaved ? 'btn-remove' : 'btn-save'}" 
                    onclick="toggleShortlist('${uni.name.replace(/'/g, "\\'")}')">
                ${isSaved ? 'Remove from Shortlist ' : 'Add to Shortlist'}
            </button>
        `;
        universityList.appendChild(card);
    });
}

function renderShortlist() {
    shortlistContainer.innerHTML = '';
    
    if (shortlist.length === 0) {
        shortlistContainer.innerHTML = '<p style="color: gray;">No favorites saved yet.</p>';
        return;
    }
 
    shortlist.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <h3>${uni.name}</h3>
                <p>${uni.country}</p>
            </div>
            <button class="btn-remove" onclick="toggleShortlist('${uni.name.replace(/'/g, "\\'")}')">
                Remove
            </button>
        `;
        shortlistContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', applyFilters);
countrySelect.addEventListener('change', applyFilters);

fetchUniversities();