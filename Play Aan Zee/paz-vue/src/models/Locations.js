export default class Locations {
    constructor(location) {
        this.location = location;
    }

    static availableLocations(){
        return CabinLocation
    }

    static sampleLocation() {

        const cabinLocation = [
            CabinLocation.IJMUIDEN,
            CabinLocation.ZANDVOORT,
            CabinLocation.RENNESSE,
            CabinLocation.OOSTENDE,
            CabinLocation.WIJK_AAN_ZEE
        ]

        const locationIndex = Math.floor(Math.random() * cabinLocation.length);
        return cabinLocation[locationIndex]
    }

    static copyConstructor(location){
        if (location == null) return null
        return location
    }
}

const CabinLocation = {
    IJMUIDEN: "Ijmuiden",
    ZANDVOORT: "Zandvoort",
    RENNESSE: "Rennesse",
    OOSTENDE: "Oostende",
    WIJK_AAN_ZEE: "Wijk aan Zee"
}