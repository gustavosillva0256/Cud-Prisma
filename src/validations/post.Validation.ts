import z from 'zod';


export const postValidation = z.object({
    title: z.string().min(5,"O nome deve ter no mínimo 5 caracteres"),
    subtitle: z.string().min(5,"O subtitulo deve ter no mínimo 5 caracteres"),
    body: z.string().min(5,"O corpo deve ter no mínimo 5 caracteres"),  
    userId: z.number().int().positive()
})

type postValidation = z.infer<typeof postValidation>


export function validadePost(post: postValidation){
    return postValidation.parse(post)
}

