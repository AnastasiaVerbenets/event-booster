async function renderCountries() {
  try {
    const countries = [
      { code: 'US', name: 'USA', region: 'NorthAmerica' },
      { code: 'CA', name: 'Canada', region: 'NorthAmerica' },
      { code: 'MX', name: 'Mexico', region: 'NorthAmerica' },
      { code: 'AR', name: 'Argentina', region: 'SouthAmerica' },
      { code: 'BR', name: 'Brazil', region: 'SouthAmerica' },
      { code: 'CO', name: 'Colombia', region: 'SouthAmerica' },
      { code: 'PE', name: 'Peru', region: 'SouthAmerica' },
      { code: 'VE', name: 'Venezuela', region: 'SouthAmerica' },
      { code: 'UY', name: 'Uruguay', region: 'SouthAmerica' },
      { code: 'AT', name: 'Austria', region: 'Europe' },
      { code: 'BE', name: 'Belgium', region: 'Europe' },
      { code: 'BG', name: 'Bulgaria', region: 'Europe' },
      { code: 'DE', name: 'Germany', region: 'Europe' },
      { code: 'ES', name: 'Spain', region: 'Europe' },
      { code: 'FR', name: 'France', region: 'Europe' },
      { code: 'GB', name: 'Great Britain', region: 'Europe' },
      { code: 'IT', name: 'Italy', region: 'Europe' },
      { code: 'PL', name: 'Poland', region: 'Europe' },
      { code: 'PT', name: 'Portugal', region: 'Europe' },
      { code: 'RU', name: 'Russia', region: 'Europe' },
      { code: 'SE', name: 'Sweden', region: 'Europe' },
      { code: 'CN', name: 'China', region: 'Asia' },
      { code: 'IN', name: 'India', region: 'Asia' },
      { code: 'JP', name: 'Japan', region: 'Asia' },
      { code: 'KR', name: 'Korea', region: 'Asia' },
      { code: 'SG', name: 'Singapore', region: 'Asia' },
      { code: 'TH', name: 'Thailand', region: 'Asia' },
      { code: 'TR', name: 'Turkey', region: 'Asia' },
      { code: 'IL', name: 'Israel', region: 'Asia' },
      { code: 'AE', name: 'UAE', region: 'Asia' },
      { code: 'SA', name: 'Saudi Arabia', region: 'Asia' },
      { code: 'ZA', name: 'South Africa', region: 'Africa' },
      { code: 'NG', name: 'Nigeria', region: 'Africa' },
      { code: 'EG', name: 'Egypt', region: 'Africa' },
      { code: 'KE', name: 'Kenya', region: 'Africa' },
      { code: 'AU', name: 'Australia', region: 'Oceania' },
      { code: 'NZ', name: 'New Zealand', region: 'Oceania' },
    ];

    const select = document.querySelector('.header__select');
    const selectedFlag = document.getElementById('selectedFlag');
    const dropdown = document.querySelector('.header__dropdown');

    function createOption(country) {
      const flagSrc = `/imgs/header/flags/${country.code.toLowerCase()}.png`;

      return `
        <li class="select__option">
          <img src="${flagSrc}" alt="${country.name}" class="flag__img">
          ${country.name}
        </li>
      `;
    }

    select.addEventListener('click', () => {
      select.classList.toggle('open');
      countries.forEach(country => {
        dropdown.insertAdjacentHTML('beforeend', createOption(country));
      });
    });

    dropdown.addEventListener('click', e => {
      const option = e.target.closest('.select__option');
      if (option) {
        const countryName = option.textContent.trim();
        const selectedCountry = countries.find(
          country => country.name === countryName
        );

        selectedFlag.src = `/imgs/header/flags/${selectedCountry.code.toLowerCase()}.png`;
        selectedFlag.alt = selectedCountry.name;
        select.classList.remove('open');
      }
    });

    document.addEventListener('click', () => {
      select.classList.remove('open');
    });

  } catch (error) {
    console.error(error);
  }
}

renderCountries();
