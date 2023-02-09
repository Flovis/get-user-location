function getLocation() {
  const succes = (position) => {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.city);
        console.log(data.principalSubdivision);

    })

  };

  const error = () => {
    console.log("error");
  };
  navigator.geolocation.getCurrentPosition(succes, error);
}

getLocation();
