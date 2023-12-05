import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./blog";

describe("<Togglable />", () => {
  let container;
  const blog = {
    title: "aloAloAAAo",
    author: "eumesmo",
    url: "https://sssssss.com",
    likes: 2,
  };

  beforeEach(() => {
    container = render(<Blog blog={blog} />).container;
  });

  test("renders its children", async () => {
    await container.querySelector(".url");
    await container.querySelector(".likes");
  });

  test("at start the children arc not displayed", async () => {
    expect(
      container.querySelectorAll("#title, #author, #url, #likes").length
    ).toBe(2);
    screen.debug();
  });

  test("after clicking the button, children are displayed", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("show");
    await user.click(button);
    expect(
      container.querySelectorAll("#title, #author, #url, #likes").length
    ).toBe(4);
    screen.debug();
  });
});
