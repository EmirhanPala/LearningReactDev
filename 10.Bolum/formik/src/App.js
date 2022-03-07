import './App.css';

import { Formik } from 'formik'
/*
Şimdi biz istiyoruzki formik'in bize vermiş olduğu bu form ve field componentlerini kullanmayalım.
Doğrudan HTML'deki formu ve input nesnelerini, etiketlerini kullanalım.
Bunun için bir kaç değişime ihtiyacımız var.
İmporttan  Field, Form siliyoruz.
*/
function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          /*
          Eğer kendi inputlarımızı kullanmak istersek yani html etiketlerinin kullanarak ilerlemek istersek
          Alttaki gibi bir yapıya bürünmemiz gerekiyor.
          Burda form ve field componentlerini kullandığımız zaman iş biraz daha kolay oluyor aslında ama çoğu zaman
          Onları kullanamayabiliyoruz. Bir takım özelleştirmeler vs gerekiyor. İşte o gibi durumlardada bu yöntemi uygulayabiliriz.
          */
          ({handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name='firstName' onChange={handleChange} />

          <br />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <input name='lastName' onChange={handleChange} />

          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input name='email' onChange={handleChange} />

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
