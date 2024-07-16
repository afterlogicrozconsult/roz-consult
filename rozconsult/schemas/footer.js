import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'agree',
      title: 'Agree link',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook link',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter link',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram link',
      type: 'string',
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy policy link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
