import React from "react";
import { Container, Row } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import BlogImage1 from "../assets/images/blog/blog-1-1.jpg";
import BlogImage2 from "../assets/images/blog/blog-1-2.jpg";
import BlogImage3 from "../assets/images/blog/blog-1-3.jpg";

// This component is originally named as BlogHome
const Courses3 = () => {
  return (
    <section className="blog-one" id="blog">
      <Container>
        <Row>
          <BlogPost
            postImage={BlogImage1}
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage2}
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage3}
            postTitle="Leverage agile frame works to provide a synopsis for"
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Courses3;
