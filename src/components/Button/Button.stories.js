import { Button } from '.'

export default {
  title: 'Button'
}

export const primary = () => (
  <>
    <Button>label</Button>
    <Button icon='right'>label</Button>
  </>
)

export const line = () => (
  <>
    <Button shape='line'>label</Button>
    <Button icon='right' shape='line'>
      label
    </Button>
  </>
)
