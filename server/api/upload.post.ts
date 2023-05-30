import form from "../form";
import admin from 'firebase-admin';
import { getFirebaseUrlByFileName } from '../firebase';

export default defineEventHandler(async (event) => {
    const { files } = await form(event.node.req);
    const file = files[0];
    if (!file) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad request: file not uploaded`
        });
    }
    const bucket = admin.storage().bucket();
    const firebaseFile = bucket.file(file.name);
    const [exists] = await firebaseFile.exists();
    if (exists) {
        throw createError({
            statusCode: 400,
            statusMessage: `File with name ${file.name} already exists`
        });
    }
    const writeStream = firebaseFile.createWriteStream();
    writeStream.end(file.buffer);
    return getFirebaseUrlByFileName(file.name);
});
