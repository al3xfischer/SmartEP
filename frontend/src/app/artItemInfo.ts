export class ArtItemInfo {
    public name: string;
    public imgSource: string;
    public description: string;
    public price: number;

    constructor(name: string, imgSource: string, description: string, price: number) {
        this.name = name;
        this.imgSource = imgSource;
        this.description = description;
        this.price = price;
    }
}