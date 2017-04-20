



 function initMap() {
   var narbonne = {lat: 43.1842770,
   lng: 3.0030780};

   var montpellier = {lat: 43.6107690,
  lng: 3.8767160};

   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 9,
     center: narbonne
   });

     var optionsMarqueurNarbonne = {
     	position: narbonne,
     	map: map,
     	title: "Ici c'est Narbonne!"
     }
     var marqueurNarbonne = new google.maps.Marker(optionsMarqueurNarbonne);

     var contenuInfoBulleNarbonne =	'<h1>Narbonne</h1>' +
     						'<h2>La cité des archevêques</h2>' +
                '<img src = "http://www.lescorbieres.com/images/narbonne%20pont%202.jpg">' +
     						'<p>Pour en savoir plus :<a href="https://en.wikipedia.org/wiki/Narbonne" title="Narbonne" target="_parent">Narbonne</a></p>';
     var infoBulleNarbonne = new google.maps.InfoWindow({
     	content: contenuInfoBulleNarbonne
     })

     google.maps.event.addListener(marqueurNarbonne, 'click', function() {
      infoBulleNarbonne.open(map, marqueurNarbonne);
     });


     var optionsMarqueurMontpellier = {
     	position: montpellier,
     	map: map,
     	title: "Ici c'est Montpellier!"
     }

     var marqueurMontpellier = new google.maps.Marker(optionsMarqueurMontpellier);

     var contenuInfoBulleMontpellier =	'<h1>Montpellier</h1>' +
     						'<h2>LA ville Frêche!</h2>' +
                '<img src = "http://www.contre-info.com/wp-content/uploads/2010/10/georges-freche-subvention-150x150.jpg">'+
     						'<p>Pour en savoir plus :<a href="https://en.wikipedia.org/wiki/Montpellier" title="Montpellier" target="_parent">Montpellier</a></p>';
     var infoBulleMontpellier = new google.maps.InfoWindow({
     	content: contenuInfoBulleMontpellier
     })

     google.maps.event.addListener(marqueurMontpellier, 'click', function() {
     	infoBulleMontpellier.open(map, marqueurMontpellier);
     });

    //  //--> Configuration de l'icône personnalisée
     var image = {
         // Adresse de l'icône personnalisée
         url: 'blasonOccitanie.png',
         // Taille de l'icône personnalisée
         size: new google.maps.Size(120, 120),
         // Origine de l'image, souvent (0, 0)
         origin: new google.maps.Point(0,0),
         // L'ancre de l'image. Correspond au point de l'image que l'on raccroche à la carte. Par exemple, si votre îcone est un drapeau, cela correspond à son mâts
         anchor: new google.maps.Point(20,80)
     };
     //
     //--> Insertion du marker avec l'ajout de l'icône
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(43.2121610, 2.3536630),
         map: map,
         title:"Ici c'est Carca !",
         // On définit l'icône de ce marker comme étant l'image définie juste au-dessus
         icon: image
     });

 };
