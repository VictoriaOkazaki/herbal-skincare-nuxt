import { z } from "zod";

export function getFirebaseUrlByFileName(fileName: string) {
    return `https://firebasestorage.googleapis.com/v0/b/herbal-scincare.appspot.com/o/${fileName}?alt=media`;
}

const ZodId = z.object({id: z.string()});

export const ZodBlogAdd = z.object({
    date: z.string(),
    file: z.string(),
    title: z.string(),
    text: z.string()
});
export type BodyBlogAdd = z.infer<typeof ZodBlogAdd>;

const ZodBlogAddPartial = ZodBlogAdd.partial();
export const ZodBlogUpdate = ZodBlogAddPartial.merge(ZodId);
export type BodyBlogUpdate = z.infer<typeof ZodBlogUpdate>;
