import { FeatureData, Feature } from "../interfaces/feature";

/**
 * createRandomFeatureData creates a random FeatureData object with a random dev, devOutTol, and quality values.
 * @param control 
 */
export const createRandomFeatureData = (control: 'X' | 'Y' | 'Z' | 'Diameter'): FeatureData => {
    const dev = Math.floor(Math.random() * (10 + 1));
    const devOutTol = Math.floor(Math.random() * (10 + 1));
    const quality = Math.floor(Math.random() * 3) as 0 | 1 | 2;

    const data: FeatureData = {
        control,
        dev,
        devOutTol,
        quality,
    };
    return data;
};


/**
 * createRandomFeatureDataArray creates an array of FeatureData objects with amount number of elements.
 * @param amount 
 */
export const createRandomFeatureDataArray = (amount: number): FeatureData[] => {
    const featureDataArray: FeatureData[] = [];
    const controls = ['X', 'Y', 'Z', 'Diameter'];

    for (let i = 0; i < amount; i++) {
        const controlIndex = i % 4;
        featureDataArray.push(createRandomFeatureData(controls[controlIndex] as 'X' | 'Y' | 'Z' | 'Diameter'));
    }

    return featureDataArray;
};

/**
 * getRandomQuality returns a random quality value
 */
export const getRandomQuality = (): 0 | 1 | 2=>  Math.floor(Math.random() * 3) as 0 | 1 | 2;

/**
 * createRandomFeature creates a random feature 
 * @param name 
 */
export const createRandomFeature = (name: string): Feature =>{
    const numberDivisibleByFour = 4 + (4 * Math.floor(Math.random() * ((12 - 4) / 4 + 1)));
    const quality = getRandomQuality();

    return {
        featureName: name,
        data: createRandomFeatureDataArray(numberDivisibleByFour),
        quality: quality,
    };
};

/**
 * updateFeatures updates the features array by replacing the data and quality of each feature
 * @param features 
 */
export const updateFeatures = (features: Feature[]): Feature[]=> {
    const updatedFeatures: Feature[] = []; 
    features.forEach(({featureName, data})=>{
        const newFeatureData = createRandomFeatureDataArray(data.length);
        const newQuality = getRandomQuality();
        updatedFeatures.push({
            featureName: featureName,
            data: newFeatureData,
            quality: newQuality,
        });
    })
    return updatedFeatures;
}
