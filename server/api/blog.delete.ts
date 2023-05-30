import admin from 'firebase-admin';

export default defineEventHandler(async (event) => {
    const body: { ids: string[] } = await readBody(event);

    const db = admin.firestore();

    for (const id of body.ids) {
        const ref = db.collection('blogs');
        await ref.doc(id).delete();
    }

    return 'success';
});
