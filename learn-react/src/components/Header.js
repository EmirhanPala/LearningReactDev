/*
Oluşturulan js dosyasının ismi küçük yazılabilir ama 
Fonksiyon tanımlarken baş harfinin büyük olduğuna dikkat edin!
Sebebi:
HTML etiketlerini render ediyoruz bazende kendi yazdığımız componentleri render ediyoruz.
Reactin bunu ayırt edebiliyor olması lzm baş harfi küçük olanlar aslında HTML ifadelerinin render edilmesi olarak
Baş harfi büyük olanlarda bizim yazdığımız custom componentlerin render edilmesi olarak algılanıyor.
*/

function Header() {
    return <div>Merhaba Ben Header Bileşeniyim</div>;
}
export default Header;