const universityList = document.getElementById('university-list');
const resultsCount = document.getElementById('results-count');
const loadingEl = document.getElementById('loading');


let universities = []; 


async function fetchUniversities() {
    try {
        loadingEl.style.display = 'block';
        universityList.innerHTML = ''; 

        const response = await fetch('http://universities.hipolabs.com/search');
        universities = await response.json();
        loadingEl.style.display = 'none';     
        renderUniversities();

    } catch (error) {
        loadingEl.textContent = 'Failed to load data.';
        console.error('API Fetch Error:', error);
    }
}


function renderUniversities() {
    universityList.innerHTML = '';
    const displayList = universities.slice(0, 100);
    resultsCount.textContent = `(${universities.length} found - showing top 100)`;

    displayList.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <h3>${uni.name}</h3>
                <p>${uni.country}</p>
                <a href="${uni.web_pages[0]}" target="_blank">Website</a>
            </div>
        `;
        
        universityList.appendChild(card);
    });
}

fetchUniversities();