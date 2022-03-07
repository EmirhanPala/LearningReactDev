import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './validations'

/*
ÖNEMLİ:
Kullanıcı deneyimini daha iyi bir hale getirmek için inputa bir veri girdiğimizde o inputun ve diğer inputların
O anki hata mesajlarını göstermemeli ne zaman ki o inputtan ayrılırsam ancak o zaman göstermeli.
Kullanıcı deneyimi için bu önemli bir durum.
Bunu yapmak içinde ilgili inputa daha önce focus olmuşmu yani touch olmuşmu oraya işte girmişmi bunu anlayıp
Ona göre oraya girmemiz lazım. Onuda şöyle yapıcaz.
Formik yine bize touched diye bir tanım veriyor. Bunu kullanarak o durumdanda kurtulabiliyoruz.
Yanin error altındaki alttaki kullandıklarımızdan örnek vericek olursak errors altında email varsa ve aynı zamanda
bu emaile daha önce focus olunmuşsa o zaman bu uyarıyı göster diyoruz.

HATA ÇÖZÜMÜ:
inputtan ayrıldığı anda bizim aynı handlerChange'i çalıştırdığımız gibi bide handleBlur'u çalıştırmamız lazım.
ve inputun içerisine bu inputtan ayrıldığı anda yani onBulur={email} bizim onu çalıştırmamız lazım.

*/

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',

        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema,
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                { errors.email && touched.email && (<div className='error'>{errors.email}</div>)}

                <br />
                <br />

                <label>Password</label>
                <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                { errors.password && touched.password && (<div className='error'>{errors.password}</div>)}

                <br />
                <br />

                <label>Confirm Password</label>
                <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />
                { errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}

                <br />
                <br />


                <br />
                <br />
                <button type="submit">Submit</button>

                <br />
                <br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup