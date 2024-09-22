export const Content: React.FC<{
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}> = ({ content }) => {
  return (
    <div className="my-5 text-[16px] prose-img:w-full prose-img:rounded-lg prose-lg prose-a:underline prose-a:underline-offset-1 prose-blockquote:border-l-2 prose-blockquote:border-l-[#3d3d3d] prose-hr:border-[#3d3d3d] prose-hr:border-t prose-hr:border-dashed prose-hr:border-opacity-50">
      {content}
    </div>
  );
};
