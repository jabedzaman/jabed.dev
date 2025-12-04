import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Children, createElement, isValidElement } from "react";
import { codeToHtml } from "shiki";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th
      key={index}
      className="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
    >
      {header}
    </th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr
      key={index}
      className="border-b border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
    >
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className="px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300"
        >
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-neutral-200 dark:border-neutral-700">
            {headers}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

// Custom table elements for markdown tables
function MarkdownTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  );
}

function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-neutral-100 dark:bg-neutral-800">{children}</thead>
  );
}

function TableBody({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
      {children}
    </tbody>
  );
}

function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
      {children}
    </tr>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </th>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300">
      {children}
    </td>
  );
}

// Custom list components
function UnorderedList({ children }: { children: React.ReactNode }) {
  return <ul className="my-4 ml-6 list-none space-y-2">{children}</ul>;
}

function OrderedList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="my-4 ml-6 list-none space-y-2 counter-reset-list">
      {children}
    </ol>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-6 -ml-10 text-neutral-700 dark:text-neutral-300 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-400 dark:before:bg-neutral-500">
      {children}
    </li>
  );
}

function CustomLink({
  href,
  ...props
}: React.ComponentProps<typeof Link> & { href: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <>
      <img
        alt={props.alt}
        className="rounded-lg mx-auto object-cover"
        {...props}
      />
      <span className="text-sm flex justify-center text-center text-gray-500">
        fig: {props.alt}
      </span>
    </>
  );
}

async function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  // Extract className from the children code tag
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === "code"
  ) as React.ReactElement<HTMLPreElement> | undefined;

  const className = codeElement?.props?.className ?? "";
  const isCodeBlock =
    typeof className === "string" && className.startsWith("language-");

  if (isCodeBlock) {
    const lang = className.split(" ")[0]?.split("-")[1] ?? "";

    if (!lang) {
      return <code {...props}>{children}</code>;
    }

    const html = await codeToHtml(String(codeElement?.props.children), {
      lang,
      themes: {
        dark: "one-light",
        light: "one-light",
      },
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // If not, return the component as is
  return <pre {...props}>{children}</pre>;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const HeadingComponent = ({ children }: { children: React.ReactNode }) => {
    const childrenString = Children.toArray(children).join("");
    const slug = slugify(childrenString);
    return createElement(`h${level}`, { id: slug }, [
      createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        },
        children
      ),
    ]);
  };
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

const components = {
  a: CustomLink,
  img: CustomImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
  Table,
  // Markdown table elements
  table: MarkdownTable,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
  // List elements
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
};

export function MDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components ?? {}) }}
    />
  );
}
