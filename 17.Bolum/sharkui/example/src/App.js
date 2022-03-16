import React from 'react'

import { ExampleComponent, Button } from 'sharkui'
import 'sharkui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Merhaba" />
      <Button text="Click" onClick={() => alert("test")} />
    </>
  )
}

/*
Dosyayı paylaşmak için npmjs.com üye olmamız gerekiyor.
Terminal: npm login
Yazdıktan sonra npmjs.com üzerinde oluşturduğumuz hesabın kullanıcı adını ve şifresini giriyoruz. Login olduktan sonra.

Kütüphaneyi göndermek içinde
Terminale: npm publish 
Kodunu çalıştırıyoruz. İlgili kütüphaneyi npmjs üzerine kayıt etmiş oluyor. versiyon 1 ile

*/

export default App
