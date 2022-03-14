import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe("Todo Testleri", () => {
    let button,input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => { 
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
     });

     test('Input ve button dökümanda bulunmalı', () => { 
        expect(button).toBeInTheDocument();
        expect(button).toBeInTheDocument();
     });

     test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
         //inputu doldur
         const name = "Emirhan";
         userEvent.type(input, name);

         //butona tıkla
         userEvent.click(button);

         //assertion (kontrol ettirmek)
         expect(screen.getByText(name)).toBeInTheDocument();
         

     });

});