import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionInfo',
  title: 'Section Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Title one',
      type: 'string',
    }),
    defineField({
      name: 'description1',
      title: 'Description one',
      type: 'text',
    }),
    defineField({
      name: 'image1',
      title: 'Image one',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title2',
      title: 'Title two',
      type: 'string',
    }),
    defineField({
      name: 'description2',
      title: 'Description two',
      type: 'text',
    }),
    defineField({
      name: 'image2',
      title: 'Image two',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title1',
    },
  },
})
