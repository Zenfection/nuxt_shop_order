interface Image {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface Images {
    aboutBackground: Image;
    homeBackground: Image;
    logo: Image;
    paymentLarge: Image;
    team1: Image;
    readonly shape: Array<string>;
}

class ImageCollection implements Images {
    aboutBackground: Image = {
        src: "/about.png",
        alt: "About Background",
        width: 550,
    };
    homeBackground: Image = {
        src: "/home.png",
        alt: "Home Background",
        width: 600,
    };
    logo: Image = {
        src: "/logo.png",
        alt: "Site Logo",
    };
    paymentLarge: Image = {
        src: "/payment/payment_large.png",
        alt: "Payment Large",
    };
    team1: Image = {
        src: "/team/1.jpg",
        alt: "Team 1",
        height: 270,
    };

    shape: Array<string> = ImageCollection.generateShapeArray();

    private static generateShapeArray(): Array<string> {
        return Array.from({ length: 8 }, (_, i) => `/shapes/shape-${i + 1}.svg`);
    }
}

export const images = new ImageCollection();