import admin from 'firebase-admin';
import { IBlog } from '~~/types';
import { getFirebaseUrlByFileName } from '../firebase';

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const offset: number = query.offset ? Number(query.offset) : 0;
    const limit: number = query.limit ? Number(query.limit) : 100;
    if (!Number.isInteger(offset) || offset < 0) {
        throw createError({
            statusCode: 400,
            statusMessage: `offset ${offset} should be an integer and >= 0`
        })
    }
    if (!Number.isInteger(limit) || limit <= 0) {
        throw createError({
            statusCode: 400,
            statusMessage: `limit ${limit} should be an integer and > 0`
        })
    }
    const db = admin.firestore();
    const ref = db.collection('blogs');
    const snapshot = await ref.offset(offset).limit(limit).get();
    const items: IBlog[] = [];
    snapshot.forEach(doc => {
        const data = doc.data();
        items.push({
            id: doc.id,
            date: data.date,
            text: data.text,
            title: data.title,
            src: getFirebaseUrlByFileName(data.file)
        });
    })
    return { items };
});