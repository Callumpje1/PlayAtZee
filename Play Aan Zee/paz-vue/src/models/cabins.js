export default class Cabin {
    constructor(id, type, location, description, image, pricePerWeek, numAvailable) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.description = description;
        this.image = image;
        this.pricePerWeek = pricePerWeek;
        this.numAvailable = numAvailable;
    }

    static createSampleCabin(pId = 0) {
        const cabinTypes = [
            CabinType.BEACH_GEAR,
            CabinType.SMALL_DAYTIME,
            CabinType.SMALL_LODGE,
            CabinType.LARGE_LODGE,
            CabinType.FAMILY_LODGE,
        ];

        const cabinLocations = [
            CabinLocation.IJMUIDEN,
            CabinLocation.ZANDVOORT,
            CabinLocation.WIJK_AAN_ZEE,
            CabinLocation.OOSTENDE,
            CabinLocation.RENNESSE
        ];

        const typeIndex = Math.floor(Math.random() * cabinTypes.length);
        const locationIndex = Math.floor(Math.random() * cabinLocations.length);
        const imageIndex = Math.floor(Math.random() * CabinImages.length);
        const pricePerWeek = Math.round(Math.random() * 2000 + 500);
        const numAvailable = Math.round(Math.random() * 5 + 5);
        const type = cabinTypes[typeIndex];
        const location = cabinLocations[locationIndex];
        const image = CabinImages[imageIndex];
        const description = `This cozy ${type} cabin is located in ${location}. It features a comfortable interior, stunning views, and is the perfect place to relax and enjoy the beach. Book now for only $${pricePerWeek} per week!`;

        return new Cabin(pId, type, location, description, image, pricePerWeek, numAvailable);
    }

}

const CabinType = {
    BEACH_GEAR: "BeachGear",
    SMALL_DAYTIME: "SmallDayTime",
    SMALL_LODGE: "SmallLodge",
    LARGE_LODGE: "LargeLodge",
    FAMILY_LODGE: "FamilyLodge"
}

const CabinLocation = {
    IJMUIDEN: "Ijmuiden",
    ZANDVOORT: "Zandvoort",
    RENNESSE: "Rennesse",
    OOSTENDE: "Oostende",
    WIJK_AAN_ZEE: "Wijk aan Zee"
}

import cabin_1 from "@/assets/cabins/cabin-1.jpg"
import cabin_2 from "@/assets/cabins/cabin-2.jpg"
import cabin_3 from "@/assets/cabins/cabin-3.jpg"
import cabin_4 from "@/assets/cabins/cabin-4.jpg"

const CabinImages = [cabin_1, cabin_2, cabin_3, cabin_4]

