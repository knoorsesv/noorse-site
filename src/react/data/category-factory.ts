import type { Category } from '../types/category'
import type { Factory } from './factory'

export const categoryFactory: Factory<Category> = (attrs): Category => ({
  name: 'Senioren',
  id: '11',
  ...attrs,
})
