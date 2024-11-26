import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type PageDocumentDataSlicesSlice = RichTextSlice

interface PageDocumentData {
  title: prismic.TitleField
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> 
  meta_title: prismic.KeyTextField
  meta_description: prismic.KeyTextField
  meta_image: prismic.ImageField<never>
}

/**
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>

export type AllDocumentTypes = PageDocument

export interface RichTextSliceDefaultPrimary {
  content: prismic.RichTextField;
}

export type RichTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<RichTextSliceDefaultPrimary>,
  never
>

type RichTextSliceVariation = RichTextSliceDefault

export type RichTextSlice = prismic.SharedSlice<
  'rich_text',
  RichTextSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    }
  }
}
