import {faker} from "@faker-js/faker";

const createMockUser = () => {
    const roles = ["USER", "ADMIN", "PREM"];
    const first_name = faker.internet.username().toLowerCase();
    const last_name = faker.person.lastName().toLowerCase();
    const email = first_name + "@jmail.com";
    const password = "hola1234";
    const randomIndex = Math.floor(Math.random() * roles.length);
    const role = roles[randomIndex];
    return {first_name,  last_name, email, password, role};
};

export default createMockUser;