import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Hero Component', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />)
    
    expect(screen.getByText('Welcome to Chris Dev')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    renderWithRouter(<Hero />)
    
    expect(screen.getByText(/Dive deep into web development, programming tutorials/)).toBeInTheDocument()
  })

  it('renders Get Started button with correct link', () => {
    renderWithRouter(<Hero />)
    
    const getStartedButton = screen.getByRole('link', { name: /get started/i })
    expect(getStartedButton).toBeInTheDocument()
    expect(getStartedButton).toHaveAttribute('href', '/dashboard/write-blog')
  })

  it('renders Learn More button with correct link', () => {
    renderWithRouter(<Hero />)
    
    const learnMoreButton = screen.getByRole('link', { name: /learn more/i })
    expect(learnMoreButton).toBeInTheDocument()
    expect(learnMoreButton).toHaveAttribute('href', '/about')
  })

  it('renders the hero image with correct alt text', () => {
    renderWithRouter(<Hero />)
    
    const heroImage = screen.getByAltText('Programming and Development')
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveClass('rounded-2xl', 'shadow-lg')
  })

  it('has responsive classes for different screen sizes', () => {
    renderWithRouter(<Hero />)
    
    const mainContainer = screen.getByText('Welcome to Chris Dev').closest('.max-w-7xl')
    expect(mainContainer).toHaveClass('flex', 'flex-col', 'md:flex-row')
  })
})
