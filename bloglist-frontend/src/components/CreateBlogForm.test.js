import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateBlogForm from './CreateBlogForm'

test('<CreateBlogForm /> event handler is called with proper information when the form is submitted', () => {

  const createBlogMock = jest.fn()

  const component = render(
    <CreateBlogForm
      createBlog={createBlogMock}
    />
  )

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')

  const form = component.container.querySelector('#createBlogForm')

  fireEvent.change(title, {
    target: { value: 'testTitle' }
  })

  fireEvent.change(author, {
    target: { value: 'testAuthor' }
  })

  fireEvent.change(url, {
    target: { value: 'testUrl' }
  })

  fireEvent.submit(form)

  console.log(createBlogMock.mock.calls[0][0])
  console.log(createBlogMock.mock.calls[0])
  console.log(createBlogMock.mock.calls)
  expect(createBlogMock.mock.calls[0][0].title).toBe('testTitle')
  expect(createBlogMock.mock.calls[0][0].author).toBe('testAuthor')
  expect(createBlogMock.mock.calls[0][0].url).toBe('testUrl')

})