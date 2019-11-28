import React from 'react'
import Button from '.'

export default {
  title: 'Button'
}

export const primary = () => (
  <>
    <Button>label</Button>
    <Button icon>label</Button>
  </>
)

export const line = () => (
  <>
    <Button shape='line'>label</Button>
    <Button icon shape='line'>label</Button>
  </>
)
