import { render, screen } from '@testing-library/react';
import App from './App'; //Bu componentin gerçekten doğru çalışıp çalışmadığını anlamaya çalışıyor.

test('renders learn react link', () => {
  render(<App />); //App componentini render ediyor.
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
App componentini buraya import ettikten sonra render etmiş.
Sonrada linkin burada gerçekten var olup olmadığını test etmiş.
linkElement diye bir tane sabit oluşturmuş. screen.getByText ifadesiyle o nesneyi bulmaya çalışıyor.
Yani içinde learn react geçen nesneyi bulmaya çalışıyor. Bunu bulduktan sonrada diyorki.
expect(bekliyorum) neyi bekliyorum? (linkElement) inin .toBeInTheDocument(); döküman içinde var olduğuna emin olmak istiyorum diyor.
Buradan eğer true geliyorsa testi geçtiniz diyor. Eğer false gelirse o test patlıyor. 
*/