import admin from 'firebase-admin';
import { getFirebaseUrlByFileName } from '../firebase';

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page: string | undefined = query.page ? String(query.page) : undefined;
    const limit: number = query.limit ? Number(query.limit) : 100;
    const search: string = query.search ? String(query.search) : '';
    if (!Number.isInteger(limit) || limit <= 0) {
        throw createError({
            statusCode: 400,
            statusMessage: `limit ${limit} should be an integer and > 0`
        })
    }
    const bucket = admin.storage().bucket();
    const result = (await bucket.getFiles({
        maxResults: limit,
        prefix: search,
        pageToken: page
    }))
    
    const files = result[0].map(el => {
        const name = el.metadata.name;
        const url = getFirebaseUrlByFileName(name);
        return { name, url };
    });

    return { nextPage: (result[1] as any)?.pageToken, files };
});