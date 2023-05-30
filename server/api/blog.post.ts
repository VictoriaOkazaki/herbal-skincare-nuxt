import admin from 'firebase-admin';
import { ZodError } from "zod";
import { BodyBlogAdd, ZodBlogAdd } from "../firebase";

export default defineEventHandler(async (event) => {
    const newBlog: BodyBlogAdd = await readBody(event);

    try {
        ZodBlogAdd.parse(newBlog);
    } catch (err: any) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad request: ${(err as ZodError).issues.map(e => `(${e.path[0]}: ${e.message})`).join(', ')}`
        });
    }

    const db = admin.firestore();
    const ref = db.collection('blogs');
    await ref.add(newBlog);

    return 'Success. Added new blog';
});
