import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact is rendering', () => {

  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>)
    expect(getByTestId('contact-me')).toHaveTextContent('Contact me')
  })

  it('renders', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>)
    expect(getByTestId('submit-button')).toHaveTextContent('Submit')
  })
})