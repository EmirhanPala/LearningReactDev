import logo from './logo.svg';
import './App.css';

function App() {
    /*
    style kullanırken süslü parantezlerimizi açıyoruz.
    ÖNEMLİ: Nasıl kullanıcaz? Obje olarak tanım vererek.
    Obje tanımlarken ne kullanıyorduk yine süslü parantez.
    
    CSS içinde tanımladıklarımızı burada öyle kullanamıyoruz.
    Örnek:
    Javascriptte bir değişken oluştururken veya bir objenin içinde key tanımı yaparken tire ifadesi kullanılamaz.
    background-color vericeksek bunu backgroundColor şeklinde yazıp devam etmemiz gerekiyor.

    Burada dikkat edilmesi gereken tek şey 
    1.Obje verdiğinize emin olmanız lazım.
    2.CSS Tanımının içinde - vs tanımlar varsa bunları bunları camel case olarak yazmanız gerekecek.
    Dikkat edilmesi gereken şeyler böyle.

    Çok sıklıkla inline tanımları verilmiyor ama verilmesi gereken durumlarda olabiliyor. O zamanda bunlara dikkat etmeniz gerekecek.

    Bir başka konu:
    Bootstrap kullanıcaksınız dimi?
    Bunu kullanırken ne yapıyorsunuz? Bootstrap size bir js ve css dosyası veriyor.
    Bunu html dosyanıza import edip kullanmaya başlayabiliyorsunuz.
    Bu şekilde dışardan endpointteki css dosyasını alıp. İmport edebilirmiyim diye sorabilirsiniz?

    cdnjs.com girelim
    bootstrap yazalım.
    gerekli dosyaları bulup yazalım.

    pek fazla tercih edilmiyor ama index.html içine bulduğumuz link tagini gömelim.

    getbootstrap.com girelim
    docs açalım
    aşağıdan components sekmesine tıklayıp bişiyler ekliyelim.

    ve sonuç olarak dışardanda bir css dosyasını alıp buraya yerleştirebiliyoruz.
    */
    return (
        <div className="App" >
            <header className="App-header" >
                <p>Edit <code> src / App.js </code> and save to reload. </p>

                <div style={{ color: "red", backgroundColor: "white", paddingTop: 50 }}>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,
                    adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
                    galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
                    olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı
                    zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum
                    pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
                    PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                </div>

                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
            </header>
        </div>
    );
}

export default App;