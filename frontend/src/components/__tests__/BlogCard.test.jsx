import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import BlogCard from '../BlogCard'

// Mock data
const mockBlog = {
  _id: '1',
  title: 'Test Blog Post',
  subtitle: 'Test Subtitle',
  description: '<p>This is a test blog description with HTML content.</p>',
  category: 'React',
  thumbnail: 'https://example.com/image.jpg',
  createdAt: '2023-01-01T00:00:00.000Z',
  author: {
    firstName: 'John',
    lastName: 'Doe'
  }
}

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('BlogCard Component', () => {
  it('renders blog card with all information', () => {
    renderWithRouter(<BlogCard blog={mockBlog} />)
    
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    expect(screen.getByText(/By John \| React \|/)).toBeInTheDocument()
    expect(screen.getByText(/This is a test blog description/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
  })

  it('handles missing optional fields gracefully', () => {
    const blogWithoutOptionals = {
      ...mockBlog,
      subtitle: undefined,
      description: undefined,
      thumbnail: undefined,
      author: { firstName: undefined, lastName: undefined }
    }
    
    renderWithRouter(<BlogCard blog={blogWithoutOptionals} />)
    
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    expect(screen.getByText(/By Anonymous \| React \|/)).toBeInTheDocument()
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument()
  })

  it('renders thumbnail when provided', () => {
    renderWithRouter(<BlogCard blog={mockBlog} />)
    
    const thumbnail = screen.getByAltText('Test Blog Post')
    expect(thumbnail).toBeInTheDocument()
    expect(thumbnail).toHaveAttribute('src', mockBlog.thumbnail)
  })

  it('strips HTML tags from description preview', () => {
    renderWithRouter(<BlogCard blog={mockBlog} />)
    
    // Should show plain text without HTML tags
    expect(screen.getByText(/This is a test blog description/)).toBeInTheDocument()
    expect(screen.queryByText('<p>')).not.toBeInTheDocument()
  })

  it('formats date correctly', () => {
    renderWithRouter(<BlogCard blog={mockBlog} />)
    
    // Check if date is formatted as DD/MM/YYYY
    expect(screen.getByText(/01\/01\/2023/)).toBeInTheDocument()
  })
})
