import React from 'react'
import { prettyDOM, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

describe('<Blog /> tests', () => {

  let component
  let changeBlog
  let removeBlog

  beforeEach(() => {
    const testBlog = {
      title: 'testiblogi',
      author: 'testiauthor',
      url: 'testiurl',
      likes: 3,
      user: {
        username: 'testUser'
      }
    }

    changeBlog = jest.fn()
    removeBlog = jest.fn()
    const loggedUsername = 'testUser'

    component = render(
      <Blog
        blog={testBlog}
        changeBlog={changeBlog}
        removeBlog={removeBlog}
        loggedUsername={loggedUsername}
      />
    )
  })

  test('<Blog /> shows only title and author by default', () => {

    //component.debug()

    const div1 = component.container.querySelector('.defaultView')
    const div2 = component.container.querySelector('.allView')

    expect(div1).not.toHaveStyle('display: none')
    expect(div2).toHaveStyle('display: none')
    //expect(component.container).toHaveTextContent('testiauthor')
    //expect(component.container).toHaveTextContent('testiurl')
    //expect(component.container).toHaveTextContent('3')
  })

  test('<Blog /> shows url and likes after clicking button', () => {
    const button = component.getByText('view')
    fireEvent.click(button)

    const div2 = component.container.querySelector('.allView')

    expect(div2).not.toHaveStyle('display: none')

  })

  test('when the like button is clicked twice the callback is also called two times', async () => {
    const button = component.getByText('like')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(changeBlog.mock.calls).toHaveLength(2)
  })
})
