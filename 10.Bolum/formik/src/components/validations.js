import * as yup from 'yup';

const validations = yup.object({
  email: yup.string().email("Geçerli bir e-mail girin.").required("Zorunlu alan."),
  password: yup.string().min(5, "Parolanız en az 5 karakter olmalıdır.").required("Zorunlu alan."),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], "Yazdığınız şifreler bir biriyle uyuşmuyor.").required("Zorunlu alan.")
});
//oneOf Methodu: Bu method ile password onayının kontrolünü yapabiliyoruz.

export default validations;