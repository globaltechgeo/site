(function (L, document) {
    const map = L.map("map", {
      center: [29.749817, -95.080757],
      zoom: 16,
    });
  
    //Criando div para lat long
    var coordinatesControl = L.control({ position: "bottomleft" });
    coordinatesControl.onAdd = function (map) {
      var container = L.DomUtil.create("div", "coordinates-control");
      container.innerHTML =
        '<span style="background-color:white;font-weight:bold;opacity : 0.6;">Latitude: <span id="lat"></span> Longitude: <span id="lng"></span></span>';
      return container;
    };
    coordinatesControl.addTo(map);
    map.on("mousemove", function (e) {
      var lat = e.latlng.lat.toFixed(6);
      var lng = e.latlng.lng.toFixed(6);
      document.getElementById("lat").textContent = lat;
      document.getElementById("lng").textContent = lng;
    });
  
    //Criando lista de Basemaps para carregar no Site
    var baseLayers = {
      "Google Streets": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
          attribution: "Map data &copy; Google contributors"
        }
      ),
      "Google Hybrid": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
          attribution: "Map data &copy; Google contributors"
        }
      ),
      "Google Satellite": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
          attribution: "Map data &copy; Google contributors"
        }
      )
      // Adicione mais camadas de mapa base, se desejar
    };
    // Adicionar camada de mapa base padrão ao mapa
    baseLayers["Google Streets"].addTo(map);
    // Criação do menu de seleção de basemap
    L.control.layers(baseLayers).addTo(map);
  
    //Localização do dispositivo
    map.locate({ setView: true, maxZoom: 16 });
    // Evento de localização bem-sucedida
    function onLocationFound(e) {
      var marker_location = L.marker(e.latlng)
        .addTo(map)
        .bindPopup(
          "Você está aqui : (" +
            e.latlng.lat.toFixed(6) +
            " , " +
            e.latlng.lng.toFixed(6) +
            ")"
        )
        .openPopup();
    }
    // Evento de falha na localização
    function onLocationError(e) {
      alert(e.message);
    }
    // Adiciona os eventos de localização
    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);
  
    //fim função map
  })(window.L, window.document);
  