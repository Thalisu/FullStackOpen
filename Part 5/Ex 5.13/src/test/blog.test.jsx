import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./blog";

test("renders content", () => {
  const blog = {
    title: "alecrimnegro",
    author: "eumesmo",
    url: "https://algumacoisa.com",
    likes: "2",
  };

  const { container } = render(<Blog blog={blog} />);

  const url = container.querySelector("#url");
  const likes = container.querySelector("#likes");
  const title = container.querySelector("#title");
  const author = container.querySelector("#author");
  expect(url).toBeNull();
  expect(likes).toBeNull();
  expect(title).toBeDefined();
  expect(author).toBeDefined();
});
