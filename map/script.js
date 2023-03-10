L.mapquest.key = 'tBmrpnYCLtywK7AR2QZEsDiHxW94Kpab';

// 'map' refers to a <div> element with the ID map
try {
  const map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

} catch(error) {
  console.error(`no map`);
}
