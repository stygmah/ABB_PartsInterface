export const QUALITY_VALUES = [0, 1, 2] as const;

export interface FeatureData {
    control: "X" | "Y" | "Z" | "Diameter";
    dev: number;
    devOutTol: number;
    quality: typeof QUALITY_VALUES[number];
}

export interface Feature {
    data: FeatureData[];
    featureName: string;
    quality: typeof QUALITY_VALUES[number];
}