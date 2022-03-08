import React from 'react'

function Header() {
    console.log("Header Component Re-rendered!");
  return (
    <div>Header</div>
  )
}
/*
Bu gibi gereksiz renderlerin önüne geçmemiz durumlarında yapmamız gereken şöyle bir işlem var.
Componenti dışarı aktarırken. React.memo diyip bununla sarmalayıp aktarırsak artık öyle bir problem yaşamıyacağız!
Ve test yaptığımızda artık butona bastığımızda console logumuzda artık öyle bir log görmüyoruz.
Memo böyle gereksiz renderların önüne geçebiliyor.
*/
export default React.memo(Header)