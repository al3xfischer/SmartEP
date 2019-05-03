export class Item {

    private _title: string;

    private _description: string;

    private _path: string;

    private _price: number;

    constructor(title: string, description: string, price: number, path: string) {
        this._title = title;
        this._description = description;
        this._price = price;
        this._path = path;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): string {
        return this._description;
    }

    public get price(): number {
        return this._price;
    }

    public get path(): string {
        return this._path;
    }

    public static Equals(first: Item, second: Item): boolean {

        if ((!first && second) || (first && !second)) {
            return false;
        }

        return first.path === second.path
            && first.title === second.title
            && first.description === second.description
            && first.price === second.price;
    }
}
