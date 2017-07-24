// View

var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};


// Model

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,

    ships: [{locations: ["10", "20", "30"], hits: ["", "", ""]},
        {locations: ["32", "33", "34"], hits: ["", "", ""]},
        {locations: ["63", "64", "65"], hits: ["", "", "hit"]}],

    // Method fire, hit or miss
    fire: function (guess) {
        for (var i = 0; i < this.numShips.length; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);  // var locations = ship.locations;
                                                        // var index = locations.indexOf(guess);
            if (index >= 0) {                           //HIT
                ship.hits[index] = "hit";
                if (this.isSunk(ship)) {
                    this.shipSunk++;
                }
                return true
            }
        }
        return false;                                   //MISS
    },
    // Method: Was the sunk
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength.length; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};