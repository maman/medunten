export declare const enum Direction {
    indMad = "indonesia-madura",
    madInd = "madura-indonesia"
}
export declare const enum Tingkat {
    enjeLyah = 1,
    engghiEnten = 2,
    engghiBunthen = 3
}
interface Query {
    kalimat: string;
    tingkat?: Tingkat;
    direction?: Direction;
}
export declare function queryBuilder(_query: Query): Query;
export default function translate(_query: Query): Promise<any>;
export {};
