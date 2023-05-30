import admin from 'firebase-admin';
import { ZodError } from "zod";
import { BodyBlogUpdate, ZodBlogUpdate } from "../firebase";

export default defineEventHandler(async (event) => {
    const newBlog: BodyBlogUpdate = await readBody(event);

    try {
        ZodBlogUpdate.parse(newBlog);
    } catch (err: any) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad request: ${(err as ZodError).issues.map(e => `(${e.path[0]}: ${e.message})`).join(', ')}`
        });
    }

    const db = admin.firestore();
    const ref = db.collection('blogs');
    await ref.doc(newBlog.id).update(newBlog);

    return 'Success. Updated blog';
});
