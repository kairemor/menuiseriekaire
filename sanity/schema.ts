import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import about from './schemaTypes/about'
import service from './schemaTypes/service'
import home from './schemaTypes/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, home, about, blockContent],
}
