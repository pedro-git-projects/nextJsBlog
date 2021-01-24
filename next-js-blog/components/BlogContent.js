import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode'

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <HighlightCode language = {language}>
            {code}
            <div>className="code-filename"</div>
            <p>{filename}</p>
        </HighlightCode>
      )
    }
  },
  image: ({node: {asset, alt}}) => {
    return(
      <div className="blog-image">
        <img src={asset.url} />
        <div className="image-alt">
          {alt}
        </div>
      </div>
    )
  }
}

const BlogContent = ({content}) =>
  <BlockContent
    imageOptions={{w: 320, h: 240, fit: 'max'}}
    serializers={serializers}
    blocks={content}
  />

export default BlogContent;