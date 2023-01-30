import React, { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import Link from "next/link";

function blogs() {
  const [posts, setPosts] = useState([]);
  const client = new ApolloClient({
    uri: "https://api.hashnode.com",
  });

  client
    .query({
      query: gql`
        query {
          user(username: "jabedzaman") {
            publication {
              posts(page: 0) {
                title
                brief
                slug
                dateAdded
                coverImage
              }
            }
          }
        }
      `,
    })
    .then((result) => setPosts(result.data.user.publication.posts));
  return (
    <section className="mx-auto my-3 max-w-3xl lg:px-0 px-5">
      <h1 className="lg:text-3xl md:text-2xl text-lg font-bold">Blogs</h1>
      <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
        I write blogs on Hashnode. You can find my blogs here.
      </p>
      <div>
        <ul role="list" className="divide-y divide-gray-200">
          {posts.reverse().map((post) => (
            <li
              key={post.slug}
              className="py-4 md:hover:scale-105 duration-200 transform ease-in-out"
            >
              <Link href={`https://blog.jabed.me/${post.slug}`}>
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{post.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">
                      {post.dateAdded.split("T")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {!posts.length > 0 && <div className="text-center">Loading...</div>}
      </div>
    </section>
  );
}

export default blogs;
