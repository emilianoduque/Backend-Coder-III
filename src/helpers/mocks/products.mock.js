import {faker} from "@faker-js/faker";

const createMockProduct = () => {
    const categories = [
    "Electrónica",
    "Hogar y Cocina",
    "Moda",
    "Salud y Belleza",
    "Deportes y Aire Libre",
    "Juguetes y Juegos",
    "Automotriz",
    "Computación",
    "Telefonía",
    "Videojuegos",
    "Herramientas y Mejoras del Hogar",
    "Libros",
    "Música e Instrumentos",
    "Mascotas",
    "Bebés",
    "Oficina y Papelería",
    "Jardín",
    "Arte y Manualidades",
    "Fotografía y Video",
    "Accesorios Inteligentes"
    ];
    const title = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    const category = categories[faker.number.int({min: 0, max: 15})];
    const image = faker.image.urlLoremFlickr({
        width: 260,
        height: 260,
    });
    const price = Number.parseInt(faker.commerce.price({min: 10, max: 2000}));
    const stock = faker.number.int({min: 1, max: 1000});
    return {title, description, category, image, price, stock};
};

export default createMockProduct;