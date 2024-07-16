import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slider',
  title: 'Slider section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
