async function renderCountries() {
  try {
    const countries = [
      { code: 'US', name: 'United States Of America', region: 'NorthAmerica'},
      { code: 'CA', name: 'Canada', region: 'NorthAmerica'},
      { code: 'MX', name: 'Mexico', region: 'NorthAmerica'},
      { code: 'AR', name: 'Argentina', region: 'SouthAmerica'},
      { code: 'BR', name: 'Brazil', region: 'SouthAmerica'},
      { code: 'CO', name: 'Colombia', region: 'SouthAmerica'},
      { code: 'PE', name: 'Peru', region: 'SouthAmerica'},
      { code: 'VE', name: 'Venezuela', region: 'SouthAmerica'},
      { code: 'UY', name: 'Uruguay', region: 'SouthAmerica'},
      { code: 'AT', name: 'Austria', region: 'Europe'},
      { code: 'BE', name: 'Belgium', region: 'Europe'},
      { code: 'BG', name: 'Bulgaria', region: 'Europe'},
      { code: 'DE', name: 'Germany', region: 'Europe'},
      { code: 'ES', name: 'Spain', region: 'Europe'},
      { code: 'FR', name: 'France', region: 'Europe'},
      { code: 'GB', name: 'Great Britain', region: 'Europe'},
      { code: 'IT', name: 'Italy', region: 'Europe'},
      { code: 'PL', name: 'Poland', region: 'Europe'},
      { code: 'PT', name: 'Portugal', region: 'Europe'},
      { code: 'RU', name: 'Russia', region: 'Europe'},
      { code: 'SE', name: 'Sweden', region: 'Europe'},
      { code: 'CN', name: 'China', region: 'Asia'},
      { code: 'IN', name: 'India', region: 'Asia'},
      { code: 'JP', name: 'Japan', region: 'Asia'},
      { code: 'KR', name: 'Korea, Republic of', region: 'Asia'},
      { code: 'SG', name: 'Singapore', region: 'Asia'},
      { code: 'TH', name: 'Thailand', region: 'Asia'},
      { code: 'TR', name: 'Turkey', region: 'Asia'},
      { code: 'IL', name: 'Israel', region: 'Asia'},
      { code: 'AE', name: 'United Arab Emirates', region: 'Asia'},
      { code: 'SA', name: 'Saudi Arabia', region: 'Asia'},
      { code: 'ZA', name: 'South Africa', region: 'Africa'},
      { code: 'NG', name: 'Nigeria', region: 'Africa'},
      { code: 'EG', name: 'Egypt', region: 'Africa'},
      { code: 'KE', name: 'Kenya', region: 'Africa'},
      { code: 'AU', name: 'Australia', region: 'Oceania'},
      { code: 'NZ', name: 'New Zealand', region: 'Oceania'},
    ];

    countries.forEach(country => {
        country.flag = `/imgs/header/flags/${country.code.toLowerCase()}.png`;
      });
      
      function createOption(regionName) {
        return countries
          .filter(country => country.region === regionName)
          .map(country => `<option value="${country.code}"><img src="${country.flag}" alt="${country.code}" class="flag__img"> ${country.name}</option>`)
          .join('');
      };
    
    const regions = ['Europe', 'NorthAmerica', 'SouthAmerica', 'Asia', 'Africa', 'Oceania'];

    regions.forEach(region => {
        const findRegion = document.getElementById(region.toLowerCase());
        if (findRegion) {
            findRegion.innerHTML = createOption(region);
        }
      });

  } catch (error) {
    console.error(error);
  }
}

renderCountries();

// document.querySelector('.custom-select').addEventListener('click', function() {
//     this.classList.toggle('open');
//   });
  