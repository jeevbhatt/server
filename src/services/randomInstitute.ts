/**
 * Generates a random 5-digit institute number as a string.
 * Ensures leading zeros are preserved if needed.
 */
const generateRandomInstituteNumber = (): string => {
    const number = Math.floor(Math.random() * 100000);
    return number.toString().padStart(5, '0');
};

export default generateRandomInstituteNumber
