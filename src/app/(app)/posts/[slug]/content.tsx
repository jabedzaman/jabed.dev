export const Content: React.FC<{
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}> = ({ content }) => {
  return (
    <div className="prose-img:w-full prose-img:rounded-lg prose-lg prose-a:underline prose-a:underline-offset-1 prose-blockquote:border-l-2 prose-blockquote:border-l-[#3d3d3d] prose-hr:border-[#3d3d3d] prose-hr:border-t prose-hr:border-dashed prose-hr:border-opacity-50 prose-pre:overflow-scroll my-2 text-[16px] md:my-5">
      {content}
    </div>
  )
}
