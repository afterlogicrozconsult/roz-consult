import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionPromo',
  title: 'Section Promo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'btnTitle',
      title: 'Button title',
      type: 'string',
    }),
    defineField({
      name: 'image1',
      title: 'Image first',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image2',
      title: 'Image second',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3',
      title: 'Image third',
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
