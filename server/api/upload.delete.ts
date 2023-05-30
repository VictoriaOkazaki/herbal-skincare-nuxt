import admin from 'firebase-admin';

export default defineEventHandler(async (event) => {
    const body: { files: string[] } = await readBody(event);

    const bucket = admin.storage().bucket();

    for (const fileName of body.files) {
        const firebaseFile = bucket.file(fileName);
        await firebaseFile.delete();
    }

    return 'success';
});
