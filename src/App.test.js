import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';


describe('App component test', ()=>{
  test('renders "click to see the text"', async() => {

    render(<App />);
  

    const linkElement = screen.getByText('click to see the text')
      expect(linkElement).toBeInTheDocument();
  });

  test('clicks and shows the "I am visible I am the text"', async()=>{
    render(<App />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    const textElement = await screen.findByText('I am visible I am the text',{}, {timeout: 1000})
    expect(textElement).toBeInTheDocument()

  })

  test('clicks and will not show "click to see the text"', async()=>{
    render(<App />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    await waitForElementToBeRemoved(() => screen.queryByText('click to see the text'))


  })

})



