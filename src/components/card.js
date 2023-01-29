function card({countries}) {
  let currencyName = "N/A";
  if (countries.currencies && countries.currencies.length > 0) {
    currencyName = countries.currencies[0].name;
  }

  let currencySymbol = "N/A";
  if (countries.currencies && countries.currencies.length > 0) {
    currencySymbol = countries.currencies[0].symbol;
  }

  return (
    <div className="card">
    <img src={countries.flag} alt="flag" className="flag"/>
     <p><b>Name:</b>{countries.name}</p>
     <p><b>Short:</b>{countries.alpha2Code}</p>
     <p><b>Capital:</b>{countries.capital}</p>
     <p><b>Code:</b>{countries.callingCodes[0]}</p>
     <p><b>Currency:</b>{currencyName}</p>
     <p><b>Symbol: </b>{currencySymbol}</p>
    </div>
  )
}

export default card;
