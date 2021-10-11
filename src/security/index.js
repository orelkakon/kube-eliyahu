import aesjs from "aes-js";

const key = [4, 2, 3, 14, 16, 5, 7, 15, 9, 10, 11, 6, 13, 1, 8, 12];

export const encrypt = (txt) => {
    const textBytes = aesjs.utils.utf8.toBytes(txt);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex
}

export const decrypt = (encryptedTxt) => {
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedTxt);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText
}