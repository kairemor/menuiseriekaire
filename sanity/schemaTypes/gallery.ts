
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true // Enables image cropping
      }
    })
  ]
})
  