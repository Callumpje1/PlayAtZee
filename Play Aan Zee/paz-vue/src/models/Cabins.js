import Locations from "@/models/Locations";
import cabin_1 from "@/assets/cabins/cabin-1.jpg"
import cabin_2 from "@/assets/cabins/cabin-2.jpg"
import cabin_3 from "@/assets/cabins/cabin-3.jpg"
import cabin_4 from "@/assets/cabins/cabin-4.jpg"

export default class Cabin {
    constructor(id, type, location, description, image, pricePerWeek, numAvailable, isActive) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.description = description;
        this.image = image;
        this.pricePerWeek = pricePerWeek;
        this.numAvailable = numAvailable;
        this.isActive = isActive;
    }

    static createSampleCabin(pId = 0) {
        const cabinTypes = [
            CabinType.BEACH_GEAR,
            CabinType.SMALL_DAYTIME,
            CabinType.SMALL_LODGE,
            CabinType.LARGE_LODGE,
            CabinType.FAMILY_LODGE,
        ];

        const typeIndex = Math.floor(Math.random() * cabinTypes.length);
        const imageIndex = Math.floor(Math.random() * CabinImages.length);
        const pricePerWeek = Math.round(Math.random() * 2000 + 500);
        const numAvailable = Math.round(Math.random() * 5 + 5);
        const type = cabinTypes[typeIndex];
        const location = Locations.sampleLocation();
        const image = CabinImages[imageIndex];
        const description = `This cozy ${type} cabin is located in ${location}. It features a comfortable interior, stunning views, and is the perfect place to relax and enjoy the beach.`;

        return new Cabin(pId, type, location, description, image, pricePerWeek, numAvailable);
    }

    static availableTypes() {
        return CabinType
    }

    static availableImages() {
        return CabinImages
    }

    static copyConstructor(cabin) {
        if (cabin == null) return null
        let copy = Object.assign(new Cabin(0), cabin)
        copy.location = Locations.copyConstructor(cabin.location)
        return copy
    }
}

const CabinType = {
    BEACH_GEAR: "Beach Gear",
    SMALL_DAYTIME: "Small DayTime",
    SMALL_LODGE: "Small Lodge",
    LARGE_LODGE: "Large Lodge",
    FAMILY_LODGE: "Family Lodge"
}

const CabinImages = [cabin_1, cabin_2, cabin_3, cabin_4]

