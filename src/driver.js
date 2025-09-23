export const randomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
};