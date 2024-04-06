import { z } from "zod";


const signInSchema = z.object({
  email: z.string().email({ message: "Введите, пожалуйста, email." }),
  password: z.string().min(8, {message: 'Введите, пожалуйста, пароль.'}),
});

const signUpSchema = signInSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли должны совпадать.",
    path: ["confirmPassword"],
  });

type ZSignUp = z.infer<typeof signUpSchema>;
type ZSignIn = z.infer<typeof signInSchema>;

const inputSignUpFormLabels: Record<keyof ZSignUp, string> = {
  email: "Email",
  confirmPassword: "Повторите пароль",
  password: "Придумайте пароль",
};

const inputSignInFormLabels: Record<keyof ZSignIn, string> = {
  email: "Email",
  password: "Пароль",
};

export { signUpSchema, signInSchema };
export type { ZSignIn, ZSignUp };
export { inputSignUpFormLabels, inputSignInFormLabels };
