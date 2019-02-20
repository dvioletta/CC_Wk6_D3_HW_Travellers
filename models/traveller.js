const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function (journey){
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function (journey){
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const total = this.journeys.filter(function (journey){
    return journey.transport === transport
  })
  return total;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
