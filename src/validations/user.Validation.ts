import z, { object } from 'zod';

export const userValidation = z.object({
    name: z.string().min(5,"O nome deve ter no mínimo 5 caracteres"),
    email: z.string().email("Insira um email válido"),
    post: z.array(object({
        title: z.string().min(5,"O titulo deve ter no mínimo 5 caracteres"),
        subtitle: z.string().min(5,"O subtitulo deve ter no mínimo 5 caracteres"),
        body: z.string().min(5,"O corpo deve ter no mínimo 5 caracteres"),
    })).optional()
    
})

type UserValidation = z.infer<typeof userValidation>    
export function validateUser(user: UserValidation) {
    return userValidation.parse(user)
}